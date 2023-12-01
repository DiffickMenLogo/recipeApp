import React from 'react'
import './Header.scss'
import SoupPalette from '../../assets/SoupPlate.svg'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const naigate = useNavigate()
  return (
    <div className='header'>
      <div style={{ display: 'flex', width: '40%', alignItems: 'center' }}>
        <div className='logo' onClick={() => naigate('/')}>
          <img style={{ marginRight: '10px' }} className='soup-plate' alt='Soup plate' src={SoupPalette} />
          <div className='text-wrapper-3'>Recipes</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: '40%' }}>
          <div className='div' onClick={() => naigate('/recipes')}>
            Рецепты
          </div>
          <div className='text-wrapper-2' onClick={() => naigate('/favorite')}>
            Избранное
          </div>
        </div>
      </div>
      {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '35px' }}>
        <div className='text-wrapper'>Регистрация</div>
        <div className='div-wrapper'>
          <div className='text-wrapper-4'>Войти</div>
        </div>
      </div> */}
    </div>
  )
}
