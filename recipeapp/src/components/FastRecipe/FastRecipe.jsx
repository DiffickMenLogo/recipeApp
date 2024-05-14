import React, { useState, useEffect } from 'react'

import './FastRecipe.scss'
import { RecipeItem } from '../Recipes/RecipeItem/RecipeItem'
import { selfApi } from '../../store/services/selfApi'

export default function FastRecipe() {
  const { data: recipes, isLoading } = selfApi.useGetRandomRecipeQuery()

  return (
    <div className='fast-recipe'>
      <div className='fast-recipe__container'>
        <div className='fast-recipe__title'>
          <h1 color='brown'>
            Что готовим <span>сегодня</span>?
          </h1>
        </div>

        <div className='fast-recipe__content'>
          {isLoading ? 'Загрузка...' : recipes.map((recipe) => <RecipeItem key={recipe._id} recipe={recipe} />)}
        </div>
      </div>
    </div>
  )
}
