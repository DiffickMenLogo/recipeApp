import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import './RecipeFilter.scss'
import React from 'react'
import Slider from '../../../assets/Slider.svg'

export const RecipeFilter = ({ type, setType, maxReadyTime, setMaxReadyTime, minCalories, setMinCalories, diet, setDiet, cuisine, setCuisine }) => {
  return (
    <div className='recipeFilter'>
      <div className='recipeFilter__title'>
        <img src={Slider} alt='slider' style={{ marginRight: '10px' }} />
        Фильтр
      </div>
      <div className='recipeFilter__content'>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel>Время приготовления</InputLabel>
          <Select value={maxReadyTime} onChange={(e) => setMaxReadyTime(e.target.value)} label='Время приготовления' fullWidth>
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
          </Select>
        </FormControl>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel>Калории</InputLabel>
          <Select value={minCalories} onChange={(e) => setMinCalories(e.target.value)} label='Калории' fullWidth>
            <MenuItem value={''}>Все</MenuItem>
            <MenuItem value={10}> 10+</MenuItem>
            <MenuItem value={100}>100+</MenuItem>
            <MenuItem value={200}>200+</MenuItem>
            <MenuItem value={300}>300+</MenuItem>
            <MenuItem value={400}>400+</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel>Диета</InputLabel>
          <Select value={diet} onChange={(e) => setDiet(e.target.value)} label='Диета' fullWidth>
            <MenuItem value={''}>Все</MenuItem>
            <MenuItem value={'vegan'}>Веганская</MenuItem>
            <MenuItem value={'vegetarian'}>Вегетарианская</MenuItem>
            <MenuItem value={'gluten free'}>Без глютена</MenuItem>
            <MenuItem value={'ketogenic'}>Кетогенная</MenuItem>
            <MenuItem value={'lacto vegetarian'}>Без лактозы</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel>Кухня</InputLabel>
          <Select value={cuisine} onChange={(e) => setCuisine(e.target.value)} label='Кухня' fullWidth>
            <MenuItem value={''}>Все</MenuItem>
            <MenuItem value={'african'}>Африка</MenuItem>
            <MenuItem value={'asian'}>Азиатская</MenuItem>
            <MenuItem value={'american'}>Американская</MenuItem>
            <MenuItem value={'british'}>Британская</MenuItem>
            <MenuItem value={'cajun'}>Каюк</MenuItem>
            <MenuItem value={'caribbean'}>Карибская</MenuItem>
            <MenuItem value={'chinese'}>Китайская</MenuItem>
            <MenuItem value={'eastern european'}>Восточная Европа</MenuItem>
            <MenuItem value={'european'}>Европа</MenuItem>
            <MenuItem value={'french'}>Французская</MenuItem>
            <MenuItem value={'german'}>Немецкая</MenuItem>
            <MenuItem value={'greek'}>Греческая</MenuItem>
            <MenuItem value={'indian'}>Индийская</MenuItem>
            <MenuItem value={'irish'}>Ирландская</MenuItem>
            <MenuItem value={'italian'}>Итальянская</MenuItem>
            <MenuItem value={'japanese'}>Японская</MenuItem>
            <MenuItem value={'jewish'}>Европейская</MenuItem>
            <MenuItem value={'korean'}>Корейская</MenuItem>
            <MenuItem value={'latin'}>Латиноамериканская</MenuItem>
            <MenuItem value={'mediterranean'}>Среднеазиатская</MenuItem>
            <MenuItem value={'mexican'}>Мексиканская</MenuItem>
            <MenuItem value={'middle eastern'}>Среднеазиатская</MenuItem>
            <MenuItem value={'nordic'}>Нордическая</MenuItem>
            <MenuItem value={'southern'}>Южная</MenuItem>
            <MenuItem value={'spanish'}>Испанская</MenuItem>
            <MenuItem value={'thai'}>Тайская</MenuItem>
            <MenuItem value={'vietnamese'}>Вьетнамская</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel>Тип</InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)} label='Тип' fullWidth>
            <MenuItem value={''}>Все</MenuItem>
            <MenuItem value={'main course'}>Основное</MenuItem>
            <MenuItem value={'side dish'}>Гарнир</MenuItem>
            <MenuItem value={'dessert'}>Десерт</MenuItem>
            <MenuItem value={'appetizer'}>Закуска</MenuItem>
            <MenuItem value={'salad'}>Салат</MenuItem>
            <MenuItem value={'bread'}>Хлеб</MenuItem>
            <MenuItem value={'breakfast'}>Завтрак</MenuItem>
            <MenuItem value={'soup'}>Суп</MenuItem>
            <MenuItem value={'beverage'}>Напиток</MenuItem>
            <MenuItem value={'sauce'}>Соус</MenuItem>
            <MenuItem value={'marinade'}>Маринад</MenuItem>
            <MenuItem value={'fingerfood'}>Фингерфуд</MenuItem>
            <MenuItem value={'snack'}>Закуска</MenuItem>
            <MenuItem value={'drink'}>Напиток</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}
