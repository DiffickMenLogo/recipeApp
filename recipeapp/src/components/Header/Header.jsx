import React from 'react'
import './Header.scss'
import SoupPalette from '../../assets/SoupPlate.svg'

export const Header = () => {
  return (
    <div className='header'>
      <div style={{ display: 'flex', width: '40%', alignItems: 'center' }}>
        <div className='logo'>
          <img style={{ marginRight: '10px' }} className='soup-plate' alt='Soup plate' src={SoupPalette} />
          <div className='text-wrapper-3'>Recipes</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: '40%' }}>
          <div className='div'>Рецепты</div>
          <div className='text-wrapper-2'>Избранное</div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '35px' }}>
        <div className='text-wrapper'>Регистрация</div>
        <div className='div-wrapper'>
          <div className='text-wrapper-4'>Войти</div>
        </div>
      </div>
    </div>
  )
}
