import React, { useEffect, useMemo, useState } from 'react'
import './RecipeAbout.scss'
import Soup from '../../assets/Soup.png'
import Heart from '../../assets/Heart.svg'
import HeartRed from '../../assets/HeartRed.svg'
import { useLocation } from 'react-router-dom'
import { recipeApi } from '../../store/services/recipeApi'
import { CircularProgress } from '@mui/material'
import { addFavorite, removeFavorite } from '../../store/slices/favoritesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selfApi } from '../../store/services/selfApi'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


import PDF from '../../assets/PDF.svg'
import Print from '../../assets/Print.svg'
export const RecipeAbout = () => {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites.favorites)
  const [favorite, setFavorite] = useState(false)

  const location = useLocation()
  const { data, isLoading } = selfApi.useGetRecipeByIdQuery(location.pathname.split('/').pop())
  const [recipe, setRecipe] = useState(null)

  const removeFavoriteHandle = (recipe) => {
    dispatch(removeFavorite(recipe))
    setFavorite(false)
  }
  const addFavoriteHandle = (recipe) => {
    dispatch(addFavorite(recipe))
    setFavorite(true)
  }

  useEffect(() => {
    if (recipe && favorites.some((item) => item.id === recipe.id)) {
      setFavorite(true)
    }
  }, [favorites, recipe])

  useEffect(() => {
    if (data) {
      setRecipe(data)
    }
  }, [data])

  useEffect(() => {
    console.log(recipe, 'recipe')
  }, [recipe])

  return isLoading || !recipe ? (
    <CircularProgress sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
  ) : (
    <div className='recipeAbout'>
      <div className='recipeAbout__top'>
        <img className='recipeAbout__top__image' src={recipe.image} alt={recipe.title} />
        <div className='recipeAbout__top__text'>
          <div className='recipeAbout__top__text__title'>
            {recipe?.name}
            <span>
              <img
                src={favorite ? HeartRed : Heart}
                alt='Heart'
                onClick={() => (favorite ? removeFavoriteHandle(recipe) : addFavoriteHandle(recipe))}
              />
            </span>
          </div>
          <div className='recipeAbout__top__text__text'>
            <div>
              <div className='recipeAbout__top__text__text__title'>{recipe?.ingredients_count}</div>
              <div className='recipeAbout__top__text__text__text' style={{ textAlign: 'center' }}>
              {recipe?.ingredients_count === 1
                ? 'ингредиент'
                : recipe?.ingredients_count >= 2 && recipe?.ingredients_count <= 4
                ? 'ингредиента'
                : 'ингредиентов'}
            </div>
            </div>
            <div style={{ borderLeft: '1px solid #592e15', borderRight: '1px solid #592e15', padding: '0 100px' }}>
              <div className='recipeAbout__top__text__text__title'>{recipe?.time}</div>
              <div className='recipeAbout__top__text__text__text'>мин</div>
            </div>
            <div>
              <div className='recipeAbout__top__text__text__title'>{recipe?.calories}</div>
              <div className='recipeAbout__top__text__text__text'>ккал</div>
            </div>
          </div>
        </div>
      </div>
      <div className='recipeAbout__title'>
        <div className='recipeAbout__title__box'>
          {recipe.ingredients.map((ingredient, index) => {
            return (
              <div className='recipeAbout__title__item' key={index}>
                {ingredient?.name} <span>{ingredient?.quantity}</span>
              </div>
            )
          })}
          <div className='print'
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '30px',
              cursor: 'pointer',
              fontSize: '24px',
            }}
            onClick={() => window.print()}
          >
            <img src={Print} alt='Soup' />
            Распечатать/Сохранить в PDF
          </div>
          
        </div>
        <div className='recipeAbout__title__text'>
          {recipe.steps.map((step, index) => {
            return (
              <div className='recipeAbout__title__text__item' key={index}>
                <p className ='text'>{step.split(':')[0] + ':'} </p>
                <p className ='text'>{step.split(':')[1]}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
