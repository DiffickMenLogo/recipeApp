import { Select, MenuItem, FormControl, InputLabel, Autocomplete, TextField } from '@mui/material'
import './RecipeFilter.scss'
import React from 'react'
import Slider from '../../../assets/Slider.svg'
import { CustomTextField } from '../../reComp/CustomTextField'
import { CustomSelect } from '../../reComp/CustonSelect'
import { selfApi } from '../../../store/services/selfApi'

import { ReactComponent as TimeFilter } from '../../../assets/TimeFilter.svg'
import { ReactComponent as BittenApple } from '../../../assets/BittenApple.svg'
import { ReactComponent as Restaurant } from '../../../assets/Restaurant.svg'
import { ReactComponent as Ingredients } from '../../../assets/Ingredients.svg'

export const RecipeFilter = ({
  type,
  setType,
  maxReadyTime,
  setMaxReadyTime,
  minCalories,
  setMinCalories,
  diet,
  setDiet,
  cuisine,
  setCuisine,
  countIngridients,
  setCountIngridients,
}) => {
  const { data: types, isLoading } = selfApi.useGetRecipesTypesQuery()
  return (
    <div className='recipeFilter'>
      <div className='recipeFilter__title'>
        <img src={Slider} alt='slider' style={{ marginRight: '10px' }} />
        Фильтр
      </div>
      <div className='recipeFilter__content'>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <TimeFilter width='40px' height='40px' />
          <FormControl sx={{ width: '100%' }}>
            <InputLabel>Время приготовления</InputLabel>
            <CustomSelect value={maxReadyTime} onChange={(e) => setMaxReadyTime(e.target.value)} label='Время приготовления' fullWidth>
              <MenuItem value={''}>Все</MenuItem>
              <MenuItem value={10}>10 минут</MenuItem>
              <MenuItem value={20}>20 минут</MenuItem>
              <MenuItem value={30}>30 минут</MenuItem>
              <MenuItem value={40}>40 минут</MenuItem>
              <MenuItem value={50}>50 минут</MenuItem>
              <MenuItem value={60}>60 минут</MenuItem>
              <MenuItem value={70}>70 минут</MenuItem>
              <MenuItem value={80}>80 минут</MenuItem>
              <MenuItem value={90}>90 минут</MenuItem>
              <MenuItem value={91}>90+ минут</MenuItem>
            </CustomSelect>
          </FormControl>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Ingredients width='40px' height='40px' />
          <FormControl sx={{ width: '100%' }}>
            <InputLabel>Ингредиенты</InputLabel>
            <CustomSelect
              MenuProps={{ PaperProps: { style: { maxHeight: 300 } } }}
              value={countIngridients}
              onChange={(e) => setCountIngridients(e.target.value)}
              label='Ингредиенты'
              fullWidth
            >
              <MenuItem value={''}>Все</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </CustomSelect>
          </FormControl>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Restaurant width='40px' height='40px' />
          <FormControl sx={{ width: '100%' }}>
            <InputLabel>Тип блюда</InputLabel>
            <CustomSelect
              MenuProps={{ PaperProps: { style: { maxHeight: 300 } } }}
              value={type}
              onChange={(e) => setType(e.target.value)}
              label='Тип блюда'
              fullWidth
            >
              <MenuItem value={''}>Все</MenuItem>
              {types?.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </CustomSelect>
          </FormControl>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <BittenApple width='40px' height='40px' />
          <FormControl sx={{ width: '100%' }}>
            <InputLabel>Калории</InputLabel>
            <CustomSelect value={minCalories} onChange={(e) => setMinCalories(e.target.value)} label='Калории' fullWidth>
              <MenuItem value={''}>Все</MenuItem>
              <MenuItem value={10}> 10+</MenuItem>
              <MenuItem value={100}>100+</MenuItem>
              <MenuItem value={200}>200+</MenuItem>
              <MenuItem value={300}>300+</MenuItem>
              <MenuItem value={400}>400+</MenuItem>
            </CustomSelect>
          </FormControl>
        </div>
      </div>
    </div>
  )
}
