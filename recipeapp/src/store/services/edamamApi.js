
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://api.edamam.com/api/recipes/v2'

export const edamamApi = createApi({
  reducerPath: 'edamamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getRecipe: builder.query({
      query: (query) => ({
        url: '',
        params: {
          type: 'public',
          app_id: '242234a3',
          app_key: '9ac94e6e5bac8b43ac6e056838fd0ee2',
          q: query.q,
        },
        headers: {
          'Accept-Language': 'ru',
          'Content-Type': 'application/json',
          'content-language': 'ru'
        }
      }),
    }),
    getRecipeById: builder.query({
      query: (query) => ({
        url: `/${query.id}`,
        params: {
          type: 'public',
          app_id: '242234a3',
          app_key: '9ac94e6e5bac8b43ac6e056838fd0ee2',
          ...query
        }
      }),
    })
  }),

})