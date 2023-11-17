import React from 'react'
import './style.scss'
import tu from '../../assets/ThumbsUp.svg'

export const Bti3 = () => {
  return (
    <div className='bti3'>
      <div className='view'>
        <img className='thumbs-up' alt='Thumbs up' src={tu} />

        <div className='text-wrapper'>Высокий рейтинг рецептов</div>
      </div>
    </div>
  )
}
