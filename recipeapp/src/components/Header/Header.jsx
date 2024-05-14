import React from 'react'
import './Header.scss'
import SoupPalette from '../../assets/SoupPlate.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearFavorites } from '../../store/slices/favoritesSlice'

export const Header = () => {
  const naigate = useNavigate()
  const dispatch = useDispatch()
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
      {localStorage.getItem('user') ? (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '35px' }}>
          <p
            style={{
              color: '#592d14',
              fontWeight: '600',
            }}
          >
            {JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).email : ''}
          </p>
          <div
            onClick={() => {
              localStorage.removeItem('user')
              dispatch(clearFavorites())
              naigate('/login')
            }}
            className='text-wrapper'
          >
            Выйти
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '35px' }}>
          <div onClick={() => naigate('/register')} className='text-wrapper'>
            Регистрация
          </div>
          <div className='div-wrapper'>
            <div
              style={{ display: 'flex', alignItems: 'center', padding: '5px', margin: '0px' }}
              onClick={() => naigate('/login')}
              className='text-wrapper-4'
            >
              Войти
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
