
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://api.edenai.run/v2'

export const edenApi = createApi({
  reducerPath: 'edenApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    parceRecipe: builder.mutation({
      query: (body) => ({
        url: '/ocr/receipt_parser',
        headers: {
          'Content-Type': `application/json`,
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGJlZjdkZDgtOTg4Ny00YzMzLWIxMmItYzIwOTA3MDI1YjE0IiwidHlwZSI6ImFwaV90b2tlbiJ9.dvTxY8kO20ZbD9z5vvYCociMg1YMZzO209rPdV7Kfjo'
        },
        body,
        method: 'POST',
      })
    })
  }),
})