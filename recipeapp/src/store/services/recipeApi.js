
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://api.spoonacular.com/recipes'

export const recipeApi = createApi({
  reducerPath: 'recipeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    findByIngredients: builder.query({
      query: (query) => ({
        url: '/findByIngredients',
        params: {
          apiKey: '3ab4ae0c88e0475dbb33c090c46cf5ce',
          ...query,
        }
      })
    }),
    complexSearch: builder.query({
      query: (query) => ({
        url: '/complexSearch',
        params: {
          apiKey: '3ab4ae0c88e0475dbb33c090c46cf5ce',
          ...query
        }
      })
    }),
    getRecipeInformation: builder.query({
      query: (id) => ({
        url: `/${id}/information`,
        params: {
          apiKey: '3ab4ae0c88e0475dbb33c090c46cf5ce',
          includeNutrition: true
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })
    })
  })

})