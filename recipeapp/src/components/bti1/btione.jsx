import React from 'react'
import './style.scss'
import Fmc from '../../assets/FastMovingConsumerGoods.svg'

export const Bti1 = () => {
  return (
    <div className='bti1'>
      <div className='view'>
        <img className='fast-moving-consumer' alt='Fast moving consumer' src={Fmc} />
        <div className='text-wrapper'>Распознавание ингредиентов из чека</div>
      </div>
    </div>
  )
}
