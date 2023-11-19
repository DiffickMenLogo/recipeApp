import React from 'react'
import './ContentText.scss'

export const ContentText = () => {
  return (
    <div className='contactText'>
      <div className='contactText__view'>
        <p>
          <span>
            Простые
            <br />
          </span>
          <span className='brown'>и</span>
          <span> вкусные</span>
          <span className='brown'> рецепты</span>
        </p>
        <div className='contactText__view__undertext'>Более 1000 рецептов</div>
      </div>
    </div>
  )
}
