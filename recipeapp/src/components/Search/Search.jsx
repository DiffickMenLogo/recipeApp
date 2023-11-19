import React from 'react'
import './Search.scss'
import Camera from '../../assets/Camera.svg'
import Searchi from '../../assets/Search.svg'
import { Input } from '@mui/material'
export const Search = () => {
  return (
    <div className='search'>
      <div className='search__box'>
        <Input disableUnderline={true} placeholder='Введите ингредиенты...' sx={{ width: '80%', height: '100%' }} variant='standard'></Input>
        <div className='search__box__btns'>
          <img className='search__box__btns__camera' alt='Camera' src={Camera} />
          <div className='search__box__btns__searchIcon'>
            <img alt='Search' src={Searchi} />
          </div>
        </div>
      </div>
    </div>
  )
}
