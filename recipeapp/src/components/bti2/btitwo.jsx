import React from 'react'
import './style.scss'
import Cfr from '../../assets/ChineseFriedRice.svg'

export const Bti2 = () => {
  return (
    <div className='bti2'>
      <div className='view'>
        <img className='chinese-fried-rice' alt='Chinese fried rice' src={Cfr} />

        <div className='text-wrapper'>
          Рецепты <br />
          любой кухни
        </div>
      </div>
    </div>
  )
}
