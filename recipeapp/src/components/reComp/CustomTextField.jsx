import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

export const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'gray', // Цвет label при фокусе
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'gray', // Цвет подчеркивания при фокусе
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#592E15', // Цвет границы
      opacity: 0.5,
      borderRadius: '25px', // Скругление углов
    },
    '&:hover fieldset': {
      borderColor: 'gray', // Цвет границы при наведении
      borderRadius: '25px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'gray', // Цвет границы при фокусе
      borderRadius: '25px',
    },
    boxShadow: '0px 3px 6px #00000029', // Тень вокруг TextField
    borderRadius: '25px',
  },
  '& .MuiOutlinedInput-input': {
    color: 'black', // Цвет текста внутри TextField
  },
  '& .MuiInputLabel-root': {
    color: 'lightgray', // Цвет label
  },
  '& .MuiPlaceholder-root': {
    color: 'lightgray', // Цвет placeholder
  },
})
