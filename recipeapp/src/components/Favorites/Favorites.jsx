import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RecipeItem } from '../Recipes/RecipeItem/RecipeItem'

export const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites)

  useEffect(() => {
    console.log(favorites)
  }, [favorites])
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
      {favorites ? favorites.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />) : <h1>No Favorites</h1>}
    </Container>
  )
}
