import React, { useEffect, useState } from 'react'
import './Search.scss'
import Camera from '../../assets/Camera.svg'
import Searchi from '../../assets/Search.svg'
import { Box, Input, Modal, TextField, Button, CircularProgress } from '@mui/material'
import { edenApi } from '../../store/services/edenApi'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../../store/slices/searchSlice'
export const Search = () => {
  const [parseRecipe, { data: parse, isLoading, isSuccess }] = edenApi.useParceRecipeMutation()

  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)

  const [url, setUrl] = useState('https://c8.alamy.com/comp/CNTYDX/tesco-shopping-receipt-CNTYDX.jpg')

  const navigate = useNavigate()

  const makeReq = (e) => {
    if (url !== '') {
      const body = {
        file_url: url,
        response_as_dict: true,
        attributes_as_list: false,
        show_original_response: false,
        providers: 'google',
        language: 'en',
      }

      parseRecipe(body)
    } else {
      alert('Заполните поле')
    }
  }

  useEffect(() => {
    if (isSuccess) {
      navigate('/recipes')
    }
  }, [isSuccess])

  useEffect(() => {
    if (parse) {
      dispatch(
        setSearchValue(
          parse.google?.extracted_data[0].item_lines
            .map((item) => (item.description ? item.description.split(' ').filter((word) => word.length > 2) : []))
            .flat(),
        ),
      )
    }
  }, [parse])

  return (
    <div className='search'>
      <div className='search__box'>
        <Input disableUnderline={true} placeholder='Введите ингредиенты...' sx={{ width: '80%', height: '100%' }} variant='standard'></Input>
        <div className='search__box__btns'>
          <img
            alt='Camera'
            className='search__box__btns__camera'
            onClick={() => {
              setOpen(true)
            }}
            src={Camera}
          />
          <div className='search__box__btns__searchIcon'>
            <img alt='Search' src={Searchi} />
          </div>
        </div>
      </div>
      <Modal open={open} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: '30%',
            height: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
          }}
        >
          <TextField value={url} onChange={(e) => setUrl(e.target.value)} sx={{ width: '90%' }} placeholder='Введите url...' variant='outlined' />
          {isLoading ? (
            <CircularProgress sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
          ) : (
            <Button variant='contained' sx={{ width: '90%', marginTop: '10px' }} onClick={makeReq}>
              Найти
            </Button>
          )}
        </Box>
      </Modal>
    </div>
  )
}
