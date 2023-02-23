import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiIndex = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63e65c2083c0e85a86920ae0.mockapi.io/api/v1' }),
  endpoints: () => ({}),
  tagTypes: ["User", "Category", "Department"]
})