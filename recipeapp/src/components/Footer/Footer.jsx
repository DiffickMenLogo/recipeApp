import React from 'react'
import './Footer.scss'
import { ReactComponent as Logo } from '../../assets/Logo.svg' // Предполагается, что логотип в формате SVG
import { ReactComponent as InstagramIcon } from '../../assets/Instagram.svg'
import { ReactComponent as FacebookIcon } from '../../assets/Viber.svg'
import { ReactComponent as TwitterIcon } from '../../assets/Telegram.svg'
import omlet from '../../assets/Omlet.png'

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
            <a href='/'>Главная страница</a>
          </li>
          <li>
            <a href='/favorites'>Избранное</a>
          </li>
          <li>
            <a href='/recipes'>Рецепты</a>
          </li>
          <li>
            <a href='/about'>О нас</a>
          </li>
        </ul>
      </div>
      <div className='footer-column'>
        <h3 className='footer-heading'>Контакты</h3>
        <p className='contact-info'>
          <p>Телефон:</p>
          <p>+7 123 456-78-90</p>
        </p>
        <p className='contact-info'>
          <p>E-mail:</p>
          <p>email@example.com</p>
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
