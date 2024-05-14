import React, { useState, useEffect } from 'react'

import { Box, Button } from '@mui/material'

import { useNavigate } from 'react-router-dom'
import './Login.scss'

import { ReactComponent as Logo } from '../../assets/Logo.svg'
import { selfApi } from '../../store/services/selfApi'

import { CustomTextField } from '../reComp/CustomTextField'

export default function Login() {
  const [login] = selfApi.useLoginMutation()

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    login({ email, password })
      .unwrap()
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res))
        alert('Вход выполнен')
        navigate('/')
      })
      .catch((error) => {
        console.log(error.data)
        alert(error.data)
      })
  }

  return (
    <div className='login'>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '800px',
          backgroundColor: 'white',
          borderRadius: '50px',

          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Logo style={{ marginTop: '70px' }} onClick={() => navigate('/')} />

        <h1 style={{ marginTop: '70px', marginBottom: '100px', color: '#592E15', fontFamily: 'Inter', fontWeight: 'normal' }}>Авторизация</h1>
        <CustomTextField
          variant='outlined'
          label='E-mail'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            marginBottom: '20px',
            width: '400px',
            fontFamily: 'Inter, sans-serif',
          }}
        />
        <CustomTextField
          variant='outlined'
          label='Пароль'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            marginBottom: '20px',
            width: '400px',
            fontFamily: 'Inter, sans-serif',
          }}
        />
        <Button
          variant='contained'
          sx={{
            width: '400px',
            backgroundColor: '#FF961C',
            borderRadius: '25px',
            fontFamily: 'Inter, sans-serif',

            '&:hover': {
              backgroundColor: '#FF961C',
              opacity: '0.7',
            },
          }}
          onClick={handleLogin}
        >
          Войти
        </Button>

        <p style={{ marginTop: '200px', color: '#A79083' }}>
          Еще нет аккаунта?{' '}
          <a style={{ color: '#592E15' }} href='/register'>
            Зарегистрироваться
          </a>
        </p>
      </Box>
    </div>
  )
}
