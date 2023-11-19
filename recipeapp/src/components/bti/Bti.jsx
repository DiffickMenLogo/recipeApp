import React from 'react'
import './Bti.scss'

export const Bti = ({ image, text }) => {
  return (
    <div className='bti'>
      <div className='bti__view'>
        <div className='bti__view__image' style={{ backgroundImage: `url(${image})` }}></div>
        <div className='bti__view__text'>{text}</div>
      </div>
    </div>
  )
}
