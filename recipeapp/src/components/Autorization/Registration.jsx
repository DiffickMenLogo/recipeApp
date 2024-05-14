import React, { useState, useEffect } from 'react'

import { Box, Button, TextField } from '@mui/material'

import { styled } from '@mui/material/styles'
import './Login.scss'

import { ReactComponent as Logo } from '../../assets/Logo.svg'
import { selfApi } from '../../store/services/selfApi'

import { CustomTextField } from '../reComp/CustomTextField'

import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [register] = selfApi.useRegisterMutation()

  const [emailReg, setEmailReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const navigate = useNavigate()

  const handleRegister = () => {
    register({ email: emailReg, password: passwordReg })
      .unwrap()
      .then((res) => {
        // localStorage.setItem('user', JSON.stringify(res))
        alert('Регистрация выполнена')
        navigate('/login')
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

        <h1 style={{ marginTop: '70px', marginBottom: '100px', color: '#592E15', fontFamily: 'Inter', fontWeight: 'normal' }}>Создайте аккаунт</h1>
        <CustomTextField
          variant='outlined'
          label='E-mail'
          type='email'
          sx={{
            marginBottom: '20px',
            width: '400px',
            fontFamily: 'Inter, sans-serif',
          }}
          onChange={(e) => {
            setEmailReg(e.target.value)
          }}
          value={emailReg}
        />
        <CustomTextField
          variant='outlined'
          label='Пароль'
          type='password'
          sx={{
            marginBottom: '20px',
            width: '400px',
            fontFamily: 'Inter, sans-serif',
          }}
          onChange={(e) => setPasswordReg(e.target.value)}
          value={passwordReg}
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
          onClick={handleRegister}
        >
          Зарегистрироваться
        </Button>

        <p style={{ marginTop: '200px', color: '#A79083' }}>
          Уже есть аккаунт?{' '}
          <a style={{ color: '#592E15' }} href='/login'>
            Войти
          </a>
        </p>
      </Box>
    </div>
  )
}
