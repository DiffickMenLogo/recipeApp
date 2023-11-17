import React from 'react'
import './Search.scss'
import Camera from '../../assets/Camera.svg'
import Searchi from '../../assets/Search.svg'

export const Search = () => {
  return (
    <div className='box'>
      <div className='view'>
        <div className='overlap-group'>
          <div className='text-wrapper'>Введите ингредиенты...</div>
          <img className='camera' alt='Camera' src={Camera} />
          <div className='search-wrapper'>
            <img className='search' alt='Search' src={Searchi} />
          </div>
        </div>
      </div>
    </div>
  )
}
