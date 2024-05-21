import React from 'react'
import './Footer.scss'
import { ReactComponent as Logo } from '../../assets/Logo.svg' // Предполагается, что логотип в формате SVG
import { ReactComponent as InstagramIcon } from '../../assets/Instagram.svg'
import { ReactComponent as FacebookIcon } from '../../assets/Viber.svg'
import { ReactComponent as TwitterIcon } from '../../assets/Telegram.svg'
import omlet from '../../assets/Omlet.png'
import { colors } from '@mui/material'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-column'>
        <Logo className='footer-logo' />
        <div className='social-icons'>
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>
      <div className='footer-column'>
        <h3 className='footer-heading'>Меню</h3>
        <ul className='footer-links'>
          <li>
            <a style={{color:"#A79083"}} href='/'>Главная страница</a>
          </li>
          <li>
            <a style={{color:"#A79083"}} href='/favorites'>Избранное</a>
          </li>
          <li>
            <a style={{color:"#A79083"}} href='/recipes'>Рецепты</a>
          </li>
          <li>
            <a style={{color:"#A79083"}} href='/about'>О нас</a>
          </li>
        </ul>
      </div>
      <div className='footer-column'>
        <h3 className='footer-heading'>Контакты</h3>
        <p className='contact-info'>
          <p style={{color:"#A79083"}}>Телефон:</p>
          <p style={{color:"#FFFFFF", margin : 0}}>+375 33 379-97-35</p>
        </p>
        <p className='contact-info'>
          <p style={{color:"#A79083"}}>E-mail:</p>
          <p style={{color:"#FFFFFF", margin : 0}}>Recipes@mail.ru</p>
        </p>
      </div>
      <div className='footer-image'>
        {/* Путь к изображению омлета */}
        <img src={omlet} alt='Omelet' />
      </div>
    </footer>
  )
}

export default Footer
