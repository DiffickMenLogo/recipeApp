import React, { useRef, useEffect } from 'react'
import './Search.scss'
import Camera from '../../assets/Camera.svg'
import Searchi from '../../assets/Search.svg'
import { Input } from '@mui/material'
import { edenApi } from '../../store/services/edenApi'
export const Search = () => {
  const [parseRecipe, { data: parse }] = edenApi.useParceRecipeMutation()

  const fileInputRef = useRef(null)

  const handleCameraClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    const body = {
      file: file,
      providers: 'google',
      language: 'ru',
    }
    parseRecipe(body)
  }

  useEffect(() => {
    if (parse) {
      console.log(parse)
    }
  }, [parse])

  return (
    <div className='search'>
      <div className='search__box'>
        <Input disableUnderline={true} placeholder='Введите ингредиенты...' sx={{ width: '80%', height: '100%' }} variant='standard'></Input>
        <div className='search__box__btns'>
          <img alt='Camera' className='search__box__btns__camera' onClick={handleCameraClick} src={Camera} />
          <div className='search__box__btns__searchIcon'>
            <img alt='Search' src={Searchi} />
          </div>
        </div>
      </div>
      <input type='file' style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} accept='image/*' />
    </div>
  )
}
