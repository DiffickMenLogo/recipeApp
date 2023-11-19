import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import './RecipeFilter.scss'
import React from 'react'
import Slider from '../../../assets/Slider.svg'

export const RecipeFilter = () => {
  return (
    <div className='recipeFilter'>
      <div className='recipeFilter__title'>
        <img src={Slider} alt='slider' style={{ marginRight: '10px' }} />
        Фильтр
      </div>
      <div className='recipeFilter__content'>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel>Время приготовления</InputLabel>
          <Select label='Время приготовления' fullWidth>
            <MenuItem>Овощи</MenuItem>
            <MenuItem>Овощи</MenuItem>
            <MenuItem>Овощи</MenuItem>
            <MenuItem>Овощи</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel>Время приготовления</InputLabel>
          <Select label='Время приготовления' fullWidth>
            <MenuItem>Овощи</MenuItem>
            <MenuItem>Овощи</MenuItem>
            <MenuItem>Овощи</MenuItem>
            <MenuItem>Овощи</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel>Время приготовления</InputLabel>
          <Select label='Время приготовления' fullWidth>
            <MenuItem>Овощи</MenuItem>
            <MenuItem>Овощи</MenuItem>
            <MenuItem>Овощи</MenuItem>
            <MenuItem>Овощи</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel>Время приготовления</InputLabel>
          <Select label='Время приготовления' fullWidth>
            <MenuItem>Овощи</MenuItem>
            <MenuItem>Овощи</MenuItem>
            <MenuItem>Овощи</MenuItem>
            <MenuItem>Овощи</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel>Время приготовления</InputLabel>
          <Select label='Время приготовления' fullWidth>
            <MenuItem>Овощи</MenuItem>
            <MenuItem>Овощи</MenuItem>
            <MenuItem>Овощи</MenuItem>
            <MenuItem>Овощи</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}
