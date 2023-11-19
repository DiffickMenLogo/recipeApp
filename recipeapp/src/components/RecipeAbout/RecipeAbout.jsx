import React, { useEffect, useMemo, useState } from 'react'
import './RecipeAbout.scss'
import Soup from '../../assets/Soup.png'
import Heart from '../../assets/Heart.svg'
import { useLocation } from 'react-router-dom'
import { recipeApi } from '../../store/services/recipeApi'
import { CircularProgress } from '@mui/material'

export const RecipeAbout = () => {
  const location = useLocation()
  const { data, isLoading } = recipeApi.useGetRecipeInformationQuery(location.pathname.split('/').pop())
  const [recipe, setRecipe] = useState(null)

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
            {recipe?.title}
            <span>
              <img src={Heart} alt='Heart' />
            </span>
          </div>
          <div className='recipeAbout__top__text__text'>
            <div>
              <div className='recipeAbout__top__text__text__title'>{recipe?.extendedIngredients?.length}</div>
              <div className='recipeAbout__top__text__text__text'>ингридиентов</div>
            </div>
            <div style={{ borderLeft: '1px solid #592e15', borderRight: '1px solid #592e15', padding: '0 100px' }}>
              <div className='recipeAbout__top__text__text__title'>{recipe?.readyInMinutes}</div>
              <div className='recipeAbout__top__text__text__text'>мин</div>
            </div>
            <div>
              <div className='recipeAbout__top__text__text__title'>{recipe?.nutrition?.nutrients[0].amount}</div>
              <div className='recipeAbout__top__text__text__text'>ккал</div>
            </div>
          </div>
        </div>
      </div>
      <div className='recipeAbout__title'>
        {recipe.extendedIngredients.map((ingredient, index) => {
          return (
            <div className='recipeAbout__title__item' key={index}>
              {index}. {ingredient?.original}
            </div>
          )
        })}
      </div>
      <div className='recipeAbout__text' dangerouslySetInnerHTML={{ __html: `${recipe.instructions}` }}></div>
    </div>
  )
}
