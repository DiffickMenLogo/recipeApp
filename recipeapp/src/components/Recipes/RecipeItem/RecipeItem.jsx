import React, { useState, useEffect } from 'react'
import './RecipeItem.scss'
import Time from '../../../assets/Time.svg'
import Heart from '../../../assets/Heart.svg'
import HeartRed from '../../../assets/HeartRed.svg'

import { useNavigate } from 'react-router-dom'
import { addFavorite, removeFavorite } from '../../../store/slices/favoritesSlice'
import { useDispatch, useSelector } from 'react-redux'

export const RecipeItem = ({ recipe }) => {
  const favorites = useSelector((state) => state.favorites.favorites)

  useEffect(() => {
    if (favorites.some((item) => item.id === recipe.id)) {
      setFavorite(true)
    }
  }, [favorites])

  const navigate = useNavigate()
  const [favorite, setFavorite] = useState(false)

  const dispatch = useDispatch()

  const addFavoriteHandle = (recipe) => {
    dispatch(addFavorite(recipe))
    setFavorite(true)
  }

  const removeFavoriteHandle = (recipe) => {
    dispatch(removeFavorite(recipe))
    setFavorite(false)
  }

  const { image, title, id } = recipe
  return (
    <div className='recipeItem'>
      <div className='recipeItem__image' onClick={() => navigate(`/recipes/${id}`)} style={{ backgroundImage: `url(${image})` }}></div>
      <div className='recipeItem__title'>{title} </div>
      <div className='recipeItem__bottom'>
        <div className='recipeItem__bottom__time'>
          <img src={Time} alt='Time' />
          <span>{recipe.readyInMinutes} минут</span>
        </div>
        <div className='recipeItem__bottom__like'>
          <img src={favorite ? HeartRed : Heart} alt='Heart' onClick={() => (favorite ? removeFavoriteHandle(recipe) : addFavoriteHandle(recipe))} />
        </div>
      </div>
    </div>
  )
}
