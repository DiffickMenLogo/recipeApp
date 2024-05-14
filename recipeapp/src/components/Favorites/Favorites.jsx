import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RecipeItem } from '../Recipes/RecipeItem/RecipeItem'
import { selfApi } from '../../store/services/selfApi'
import { useDispatch } from 'react-redux'
import { setFavorites } from '../../store/slices/favoritesSlice'

export const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites)

  const dispatch = useDispatch()

  const user = JSON.parse(localStorage.getItem('user'))

  const { data: favoritesData } = selfApi.useGetUserQuery(
    { id: user?._id },
    {
      skip: !localStorage.getItem('user'),
      refetchOnMountOrArgChange: true,
    },
  )

  useEffect(() => {
    if (favoritesData) {
      dispatch(setFavorites(favoritesData?.favorites || []))
    }
  }, [favoritesData])

  useEffect(() => {
    console.log(favorites)
  }, [favorites])
  return (
    <Container
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '40px', minHeight: '45vh', paddingTop: '5vh' }}
    >
      {favorites ? favorites.map((recipe) => <RecipeItem key={recipe._id} recipe={recipe} />) : <h1>No Favorites</h1>}
    </Container>
  )
}
