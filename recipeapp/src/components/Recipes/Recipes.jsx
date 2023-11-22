import React, { useEffect, useState } from 'react'
import './Recipes.scss'
import Selection from '../MultiSelectItem/SelectionComponent'
import { RecipeItem } from './RecipeItem/RecipeItem'
import { RecipeFilter } from './RecipeFilter/RecipeFilter'
import { recipeApi } from '../../store/services/recipeApi'
import { TextField } from '@mui/material'
import { edamamApi } from '../../store/services/edamamApi'
import { useSelector } from 'react-redux'

export const Recipes = () => {
  const reduxSearchValue = useSelector((state) => state.searchValue.value)

  useEffect(() => {
    if (reduxSearchValue) {
      setSearchValue(reduxSearchValue)
    }
  }, [reduxSearchValue])

  const [searchValue, setSearchValue] = useState(['apple', 'banana'])
  const [searchInputValue, setSearchInputValue] = useState('')
  const [perPage, setPerPage] = useState(12)
  // const [q, setQ] = useState('')
  const [recipes, setRecipes] = useState([])
  // const [newRecipes, setNewRecipes] = useState([])

  const { data, isLoading } = recipeApi.useFindByIngredientsQuery({
    ingredients: searchValue.join(','),
    number: perPage,
  })

  // const { data: newRecipesData, isLoading: newIsLoading } = edamamApi.useGetRecipeQuery({
  //   q,
  // })

  // useEffect(() => {
  //   if (newRecipesData) {
  //     setNewRecipes(newRecipesData)
  //   }
  // }, [newRecipesData])

  // useEffect(() => {
  //   console.log(newRecipes, 'newRecipes')
  // }, [newRecipes])

  useEffect(() => {
    if (data) {
      setRecipes(data)
    }
  }, [data])

  const searchSubmit = (e) => {
    console.log('searchSubmit')
    setSearchValue([...searchValue, e.target.value])
  }

  const searchChange = (e) => {
    setSearchInputValue(e.target.value)
  }

  useEffect(() => {
    console.log(searchValue, 'searchValue')
  }, [searchValue])

  useEffect(() => {
    console.log(searchInputValue, 'searchInputValue')
  }, [searchInputValue])

  return (
    <div className='recipes'>
      <div className='recipes__search'>
        <TextField
          sx={{ width: '60%', background: 'white', borderRadius: '10px' }}
          onChange={searchChange}
          returnKeyType='search'
          autoFocus={true}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              searchSubmit(e)
            }
          }}
          label='Outlined'
          variant='outlined'
        />
        <div className='recipes__search__items'>
          {searchValue.map((item, index) => (
            <div key={index} className='recipes__search__items__item'>
              {item} <span onClick={() => setSearchValue(searchValue.filter((el) => el !== item))}>X</span>
            </div>
          ))}
        </div>
      </div>
      <div className='recipes__search__bottom'>
        Найдено <span>100</span> рецептов
      </div>
      <div className='recipes__content'>
        <div className='recipes__content__left'>
          {isLoading ? 'Загрузка...' : recipes.map((item, index) => <RecipeItem key={index} recipe={item} />)}
        </div>
        <div className='recipes__content__right'>
          <RecipeFilter />
        </div>
      </div>
    </div>
  )
}
