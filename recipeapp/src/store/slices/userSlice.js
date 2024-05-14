import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  favorites: [],
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload
    },
  },
})

export const { setUser, setFavorites } = userSlice.actions
export default userSlice.reducer
