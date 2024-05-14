import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favorites: [],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload)
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((item) => item._id !== action.payload._id)
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload
    },

    clearFavorites: (state) => {
      state.favorites = []
    },
  },
})

export const { addFavorite, removeFavorite, setFavorites, clearFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
