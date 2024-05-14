import { configureStore } from '@reduxjs/toolkit'
import { recipeApi } from './services/recipeApi'
import { edenApi } from './services/edenApi'
import searchSlice from './slices/searchSlice'
import favoritesSlice from './slices/favoritesSlice'
import { edamamApi } from './services/edamamApi'
import { selfApi } from './services/selfApi'
import userSlice from './slices/userSlice'

const combineReducers = {
  [recipeApi.reducerPath]: recipeApi.reducer,
  [edenApi.reducerPath]: edenApi.reducer,
  [edamamApi.reducerPath]: edamamApi.reducer,
  [selfApi.reducerPath]: selfApi.reducer,
  searchValue: searchSlice,
  favorites: favoritesSlice,
  userSlice: userSlice,
}

const store = configureStore({
  reducer: combineReducers,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipeApi.middleware).concat(edenApi.middleware).concat(edamamApi.middleware).concat(selfApi.middleware),
})

export default store
