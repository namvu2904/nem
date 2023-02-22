import { apiIndex } from './index'

const extendedApi = apiIndex.injectEndpoints({
  endpoints: (builder) => ({
    getUsers:builder.query({
        query:() => ({
            url:"users",
            method:"GET"
        })
    }),
  }),
  overrideExisting: false,
})

export const { useGetUsersQuery } = extendedApi