import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'UsersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
      getUsersByName: builder.query({
        query: (name) => {
          return`${name}`
      },
      }),
    }),
  })

export const {useGetUsersByNameQuery} = usersApi;