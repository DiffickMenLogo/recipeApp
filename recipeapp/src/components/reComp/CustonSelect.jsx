import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'

export const CustomSelect = styled(Select)({
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'gray', // Цвет границы при фокусе
    opacity: 0.5,
    borderRadius: '25px', // Скругление углов
    border: 'none',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'gray', // Цвет границы при наведении
    borderRadius: '25px',
    border: 'none',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#592E15', // Цвет границы
    opacity: 0.5,
    borderRadius: '25px', // Скругление углов
    border: 'none',
  },
  '& .MuiSelect-select': {
    // boxShadow: '0px 3px 6px #00000029', // Тень вокруг Select
    borderRadius: '25px',
    color: 'black', // Цвет текста внутри Select
    '&:focus': {
      borderRadius: '25px',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'lightgray', // Цвет label
  },
  '& .MuiSvgIcon-root': {
    color: 'gray', // Цвет иконки
  },
})
