
import { configureStore } from '@reduxjs/toolkit'
import { recipeApi } from './services/recipeApi'
import { edenApi } from './services/edenApi'
import searchSlice from './slices/searchSlice'
import favoritesSlice from './slices/favoritesSlice'
import { edamamApi } from './services/edamamApi'

const combineReducers = {
  [recipeApi.reducerPath]: recipeApi.reducer,
  [edenApi.reducerPath]: edenApi.reducer,
  [edamamApi.reducerPath]: edamamApi.reducer,
  searchValue: searchSlice,
  favorites: favoritesSlice
}

const store = configureStore({
  reducer: combineReducers,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(recipeApi.middleware)
    .concat(edenApi.middleware)
    .concat(edamamApi.middleware),
})


export default store