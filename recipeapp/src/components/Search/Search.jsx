import React, { useEffect, useState } from 'react'
import './Search.scss'
import Camera from '../../assets/Camera.svg'
import Searchi from '../../assets/Search.svg'
import { Box, Input, Modal, TextField, Button, CircularProgress } from '@mui/material'
import { edenApi } from '../../store/services/edenApi'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../../store/slices/searchSlice'
import { createWorker } from 'tesseract.js'
export const Search = () => {
  // const [parseRecipe, { data: parse, isLoading, isSuccess }] = edenApi.useParceRecipeMutation()

  const parser = async (url) => {
    try {
      const worker = createWorker()
      await worker.load()
      await worker.loadLanguage('eng')
      await worker.initialize('eng')
      const {
        data: { text },
      } = await worker.recognize(url)
      await worker.terminate()
      return text
    } catch (error) {
      console.log(error)
    }
  }

  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)

  const [url, setUrl] = useState('https://c8.alamy.com/comp/CNTYDX/tesco-shopping-receipt-CNTYDX.jpg')

  const navigate = useNavigate()

  const [searchItems, setSearchItems] = useState([])
  const [searchValueHandle, setSearchValueHandle] = useState('')

  // const makeReq = (e) => {
  //   if (url !== '') {
  //     const body = {
  //       file_url: url,
  //       response_as_dict: true,
  //       attributes_as_list: false,
  //       show_original_response: false,
  //       providers: 'google',
  //       language: 'en',
  //     }

  //     parseRecipe(body)
  //   } else {
  //     alert('Заполните поле')
  //   }
  // }

  // useEffect(() => {
  //   if (isSuccess) {
  //     navigate('/recipes')
  //   }
  // }, [isSuccess])

  // useEffect(() => {
  //   if (parse) {
  //     dispatch(
  //       setSearchValue(
  //         parse.google?.extracted_data[0].item_lines
  //           .map((item) => (item.description ? item.description.split(' ').filter((word) => word.length > 2) : []))
  //           .flat(),
  //       ),
  //     )
  //   }
  // }, [parse])

  const simpleSearch = () => {
    dispatch(setSearchValue(searchItems))
    navigate('/recipes')
  }

  return (
    <div className='search'>
      <div className='search__box'>
        <Input
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              setSearchItems((searchItems) => [...searchItems, e.target.value])
              setSearchValueHandle('')
            }
          }}
          onChange={(e) => setSearchValueHandle(e.target.value)}
          value={searchValueHandle}
          disableUnderline={true}
          placeholder='Введите ингредиенты...'
          sx={{ width: '80%', height: '100%' }}
          variant='standard'
        ></Input>
        <div className='search__box__btns'>
          <img alt='Camera' className='search__box__btns__camera' src={Camera} />
          <div onClick={simpleSearch} className='search__box__btns__searchIcon'>
            <img alt='Search' src={Searchi} />
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '50%',
            bottom: '-60%',
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {searchItems.map((item) => (
            <p
              style={{
                margin: 0,
                padding: '10px 20px',
                backgroundColor: '#fff',
                borderRadius: '10px',
                fontFamily: 'Inter, sans-serif',
                color: 'rgba(89, 46, 21, 0.53)',
              }}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* <Modal open={open} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClose={() => setOpen(false)}>
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
      </Modal> */}
    </div>
  )
}
