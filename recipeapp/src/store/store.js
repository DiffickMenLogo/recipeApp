
import { configureStore } from '@reduxjs/toolkit'
import { recipeApi } from './services/recipeApi'

const combineReducers = {
  [recipeApi.reducerPath]: recipeApi.reducer,
}

const store = configureStore({
  reducer: combineReducers,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipeApi.middleware),
})


export default store