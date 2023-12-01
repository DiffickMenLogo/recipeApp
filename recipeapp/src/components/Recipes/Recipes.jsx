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

  const [searchValue, setSearchValue] = useState([])
  const [searchInputValue, setSearchInputValue] = useState('')
  const [perPage, setPerPage] = useState(12)

  //filters
  const [maxReadyTime, setMaxReadyTime] = useState()
  const [minCalories, setMinCalories] = useState()
  const [diet, setDiet] = useState()
  const [cuisine, setCuisine] = useState()
  const [type, setType] = useState()

  // const [q, setQ] = useState('')
  const [recipes, setRecipes] = useState([])
  // const [newRecipes, setNewRecipes] = useState([])

  const { data, isLoading } = recipeApi.useComplexSearchQuery({
    includeIngredients: searchValue.join(','),
    number: perPage,
    addRecipeInformation: true,
    maxReadyTime: maxReadyTime,
    minCalories: minCalories,
    diet: diet,
    cuisine: cuisine,
    type: type,
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
    console.log(data, 'data')
    if (data) {
      setRecipes(data.results)
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
        Найдено <span>{recipes.length}</span> рецептов
      </div>
      <div className='recipes__content'>
        <div className='recipes__content__left'>
          {isLoading ? 'Загрузка...' : recipes.map((item, index) => <RecipeItem key={index} recipe={item} />)}
        </div>
        <div className='recipes__content__right'>
          <RecipeFilter
            diet={diet}
            setDiet={setDiet}
            maxReadyTime={maxReadyTime}
            setMaxReadyTime={setMaxReadyTime}
            minCalories={minCalories}
            setMinCalories={setMinCalories}
            cuisine={cuisine}
            setCuisine={setCuisine}
            type={type}
            setType={setType}
          />
        </div>
      </div>
    </div>
  )
}
