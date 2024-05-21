import React, { useState, useEffect } from 'react'
import './RecipeItem.scss'
import Time from '../../../assets/Time.svg'
import Heart from '../../../assets/Heart.svg'
import HeartRed from '../../../assets/HeartRed.svg'

import { useNavigate } from 'react-router-dom'
import { addFavorite, removeFavorite } from '../../../store/slices/favoritesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selfApi } from '../../../store/services/selfApi'

export const RecipeItem = ({ recipe }) => {
  const favorites = useSelector((state) => state.favorites.favorites)

  useEffect(() => {
    if (favorites.some((item) => item._id === recipe._id)) {
      setFavorite(true)
    }
  }, [favorites])

  const [addFavoriteReq] = selfApi.useAddFavoriteMutation()
  const [removeFavoriteReq] = selfApi.useDeleteFavoriteMutation()

  const navigate = useNavigate()
  const [favorite, setFavorite] = useState(false)

  const dispatch = useDispatch()

  const addFavoriteHandle = async (recipe) => {
    dispatch(addFavorite(recipe))
    if (localStorage.getItem('user')) {
      const userId = JSON.parse(localStorage.getItem('user'))._id
      await addFavoriteReq({ userId, recipe: recipe })
    } else {
      alert('Вы не авторизованы чтобы добавить в избранное')
    }
    setFavorite(true)
  }

  const removeFavoriteHandle = async (recipe) => {
    dispatch(removeFavorite(recipe))
    if (localStorage.getItem('user')) {
      const userId = JSON.parse(localStorage.getItem('user'))._id
      await removeFavoriteReq({ userId, recipe: recipe })
    } else {
      alert('Вы не авторизованы чтобы удалить из избранного')
    }
    setFavorite(false)
  }

  const timeHandler = (time) => {
    if (time < 60) {
      return `${time} мин`
    } else {
      return `${Math.floor(time / 60)} ч ${time % 60} мин`
    }
  }

  const { image, name, _id } = recipe
  return (
    <div className='recipeItem'>
      <div className='recipeItem__image' onClick={() => window.open(`/recipes/${_id}`, '_blank')}
        style={{ backgroundImage: `url(${image})` }}></div>
      <div className='recipeItem__title'>{name} </div>
      <div className='recipeItem__bottom'>
        <div className='recipeItem__bottom__time'>
          <img src={Time} alt='Time' />
          <span>{timeHandler(recipe.time)}</span>
        </div>
        <div className='recipeItem__bottom__like'>
          <img src={favorite ? HeartRed : Heart} alt='Heart' onClick={() => (favorite ? removeFavoriteHandle(recipe) : addFavoriteHandle(recipe))} />
        </div>
      </div>
    </div>
  )
}
