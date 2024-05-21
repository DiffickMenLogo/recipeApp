import React, { useEffect, useState } from 'react'
import './Recipes.scss'
import Selection from '../MultiSelectItem/SelectionComponent'
import { RecipeItem } from './RecipeItem/RecipeItem'
import { RecipeFilter } from './RecipeFilter/RecipeFilter'
import { recipeApi } from '../../store/services/recipeApi'
import { Switch, TextField } from '@mui/material'
import { edamamApi } from '../../store/services/edamamApi'
import { useDispatch, useSelector } from 'react-redux'
import { selfApi } from '../../store/services/selfApi'

import { ReactComponent as ArrowLeft } from '../../assets/ArrowLeft.svg'
import { ReactComponent as ArrowRight } from '../../assets/ArrowRight.svg'
import { setFavorites } from '../../store/slices/favoritesSlice'

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

  const [searchSwitch, setSearchSwitch] = useState(false)

  const [searchRcipe, setSearchRcipe] = useState('')

  const [page, setPage] = useState(1)

  const [sortByTime, setSortByTime] = useState(false)


  //favorites

  const dispatch = useDispatch()

  const sortRecipesByTime = (recipes) => {
    return recipes.sort((a, b) => a.time - b.time)
  }

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

  //filters
  const [maxReadyTime, setMaxReadyTime] = useState()
  const [minCalories, setMinCalories] = useState()
  const [diet, setDiet] = useState()
  const [cuisine, setCuisine] = useState()
  const [type, setType] = useState()
  const [countIngridients, setCountIngridients] = useState()

  // const [q, setQ] = useState('')
  const [recipes, setRecipes] = useState([])
  // const [newRecipes, setNewRecipes] = useState([])


  const { data, isLoading } = selfApi.useGetRecipesQuery(
    {
      page: page,
      limit: perPage,
      time: maxReadyTime,
      calories: minCalories,
      type: type,
      coutIngridients: countIngridients,
      search: searchRcipe,
      ingredients: searchValue ? searchValue.join(',') : '',
      sortTime: sortByTime
    },
    {
      refetchOnMountOrArgChange: true,
    },
  )

  const { data: recipeLength, isFetching: recipeLengthLoading } = selfApi.useGetRecipesLengtsQuery(
    {
      limit: perPage,
      time: maxReadyTime,
      calories: minCalories,
      type: type,
      coutIngridients: countIngridients,
      search: searchRcipe,
      ingredients: searchValue ? searchValue.join(',') : '',
    },
    {
      refetchOnMountOrArgChange: true,
    },
  )


  useEffect(() => {
    console.log(data, 'data')
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

  const addPage = () => {
    setPage(page + 1)
  }

  const removePage = () => {
    if (page > 1) {
      setPage(page - 1)
    } else {
      setPage(1)
    }
  }

  return (
    <div className='recipes'>
      <div className='recipes__search'>
        <div>
          <Switch value={searchSwitch} onChange={() => setSearchSwitch(!searchSwitch)} />
          {searchSwitch ? (
            <span style={{ marginLeft: '10px', color: 'white' }}>Поиск по названию</span>
          ) : (
            <span style={{ marginLeft: '10px', color: 'white' }}>Поиск по ингредиентам</span>
          )}
        </div>
        {searchSwitch ? (
          <TextField
            sx={{ width: '60%', background: 'white', borderRadius: '10px' }}
            onChange={(e) => setSearchRcipe(e.target.value)}
            returnKeyType='search'
            autoFocus={true}
            value={searchRcipe}
            label='Введите название...'
            variant='outlined'
          />
        ) : (
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
              sx={{ width: '60%', background: 'white', borderRadius: '10px' }}
              returnKeyType='search'
              autoFocus={true}
              label='Введите ингредиенты...'
              variant='outlined'
              // onChange={(e) => setSearchRcipe(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  searchSubmit(e)
                }
              }}
            />
            <div className='recipes__search__items'>
              {searchValue.map((item, index) => (
                <div key={index} className='recipes__search__items__item'>
                  {item} <span onClick={() => setSearchValue(searchValue.filter((el) => el !== item))}>X</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className='recipes__search__bottom' style={{ display: 'flex', alignItems: 'center' }}>
        Найдено&nbsp; <span>{recipeLengthLoading ? 'Загрузка...' : recipeLength.count} </span>&nbsp;рецептов
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '920px' }}>
        <Switch checked={sortByTime} onChange={() => setSortByTime(!sortByTime)}/>
        <span style={{ marginLeft: '10px', color: 'rgba(89, 46, 21, 0.53)' }}>Сортировка по времени</span>
      </div>
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
            countIngridients={countIngridients}
            setCountIngridients={setCountIngridients}
          />
        </div>
      </div>
      <div className='recipes__footer'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '35px',
          }}
        >
          <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', color: '#A79083' }} onClick={() => removePage()}>
            <ArrowLeft />
            Предыдущая
          </div>
          <div style = {{color: '#A79083'}}>{page}</div>
          <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', color: '#A79083' }} onClick={() => addPage()}>
            Следующая
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  )
}
