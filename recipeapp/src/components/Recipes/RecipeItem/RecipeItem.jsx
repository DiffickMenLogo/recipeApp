import React from 'react'
import './RecipeItem.scss'
import Soup from '../../../assets/Soup.png'
import Time from '../../../assets/Time.svg'
import Like from '../../../assets/Heart.svg'

import { useNavigate } from 'react-router-dom'

export const RecipeItem = ({ recipe }) => {
  const navigate = useNavigate()

  const { image, title, id } = recipe
  return (
    <div className='recipeItem'>
      <div className='recipeItem__image' onClick={() => navigate(`/recipes/${id}`)} style={{ backgroundImage: `url(${image})` }}></div>
      <div className='recipeItem__title'>{title} </div>
      <div className='recipeItem__bottom'>
        <div className='recipeItem__bottom__time'>
          <img src={Time} alt='Time' />
          <span>10 минут</span>
        </div>
        <div className='recipeItem__bottom__like'>
          <img src={Like} alt='Like' />
        </div>
      </div>
    </div>
  )
}
