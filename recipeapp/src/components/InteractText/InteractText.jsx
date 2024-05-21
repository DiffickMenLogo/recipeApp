import React, { useState } from 'react'
import { words as wordsList } from './words'
import { Button, CircularProgress } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchValue } from '../../store/slices/searchSlice'

const ImageToText = () => {
  const [imageData, setImageData] = useState(null)
  const [extractedText, setExtractedText] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [extractItems, setExtractItems] = useState([])

  const [loading, setLoading] = useState(false)

  const conHandler = () => {
    if (extractItems) {
      dispatch(setSearchValue(extractItems))
      navigate('recipes')
    } else {
      alert('Дожитесь загрузки или загрузите чек.')
    }
  }

  const filterWords = (text) => {
    const words = text.match(/[а-яА-ЯёЁa-zA-Z]+/g) || []

    console.log(words)

    const filteredWords = words.filter((word) => wordsList.includes(word))
    return setExtractItems(filteredWords)
  }

  const handleImageUpload = async (event) => {
    const file = event.target.files[0]
    const base64Image = await convertToBase64(file)
    setImageData(base64Image)
  }

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  const extractTextFromImage = async () => {
    const apiKey = 'AIzaSyCl2JGdpAbT8M4wE_az1vwoWaFTAXWGj4Y'
    const url = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`

    const requestBody = {
      requests: [
        {
          image: {
            content: imageData.split('base64,')[1], // Remove the base64 prefix
          },
          features: [
            {
              type: 'TEXT_DETECTION',
            },
          ],
        },
      ],
    }

    try {
      setLoading(true)
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const result = await response.json()
      const detectedText = result.responses[0].fullTextAnnotation.text
      const filteredWordsText = filterWords(detectedText)
      setExtractedText(filteredWordsText)
      setLoading(false)
    } catch (error) {
      console.error('Error during text detection:', error)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        // alignItems: 'space-between',

        // justifyContent: 'space-between',
      }}
    >
      <input type='file' accept='image/*' onChange={handleImageUpload} />
      <button onClick={extractTextFromImage} disabled={!imageData}>
        Extract Text
      </button>
      <div
        style={{
          maxHeight: '200px',
          overflow: 'auto',
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          extractItems &&
          extractItems.map((item) => {
            return <p key={item}>{item}</p>
          })
        )}
      </div>
      <Button variant='contained' onClick={() => conHandler()}>
        Продолжить
      </Button>
    </div>
  )
}

export default ImageToText
