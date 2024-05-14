import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://localhost:3001'

export const selfApi = createApi({
  reducerPath: 'selfApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: (query) => ({
        url: '/getRecipes',
        params: {
          page: query.page,
          limit: query.limit,
          time: query.time,
          calories: query.calories,
          type: query.type,
          coutIngridients: query.coutIngridients,
          search: query.search,
          ingredients: query.ingredients,
        },
      }),
    }),
    getRecipeById: builder.query({
      query: (id) => ({
        url: `/getRecipe`,
        params: {
          id: id,
        },
      }),
    }),
    getRecipesTimes: builder.query({
      query: () => ({
        url: '/recipesTimes',
      }),
    }),
    getRecipesLengts: builder.query({
      query: (query) => ({
        url: '/recipesLength',
        params: {
          limit: query.limit,
          time: query.time,
          calories: query.calories,
          type: query.type,
          coutIngridients: query.coutIngridients,
          search: query.search,
          ingredients: query.ingredients,
        },
      }),
    }),
    getRandomRecipe: builder.query({
      query: () => ({
        url: '/getRandomRecipes',
      }),
    }),
    getRecipesTypes: builder.query({
      query: () => ({
        url: '/recipesTypes',
      }),
    }),

    login: builder.mutation({
      query: (body) => ({
        url: '/loginUser',
        method: 'POST',
        body,
      }),
    }),
    getUser: builder.query({
      query: (query) => ({
        url: '/getUser',
        params: {
          id: query.id,
        },
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: '/registerUser',
        method: 'POST',
        body,
      }),
    }),
    addFavorite: builder.mutation({
      query: (body) => ({
        url: '/addFavorite',
        method: 'POST',
        body,
      }),
    }),
    deleteFavorite: builder.mutation({
      query: (body) => ({
        url: '/deleteFavorite',
        method: 'POST',
        body,
      }),
    }),
    getFavorites: builder.query({
      query: (query) => ({
        url: '/getFavorites',
        params: {
          userId: query.userId,
        },
      }),
    }),
  }),
})
