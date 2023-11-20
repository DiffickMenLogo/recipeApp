
import { configureStore } from '@reduxjs/toolkit'
import { recipeApi } from './services/recipeApi'
import { edenApi } from './services/edenApi'

const combineReducers = {
  [recipeApi.reducerPath]: recipeApi.reducer,
  [edenApi.reducerPath]: edenApi.reducer
}

const store = configureStore({
  reducer: combineReducers,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipeApi.middleware).concat(edenApi.middleware),
})


export default store