import { apiIndex } from './index'

const extendedApi = apiIndex.injectEndpoints({
  endpoints: (builder) => ({
    getUsers:builder.query({
        query:() => ({
            url:"users",
            method:"GET"
        }),
        providesTags: ["User"]
    }),
    addUser:builder.mutation({
      query: (data)=>({
        url: "users",
        method: "POST",
        body:data
      }),
      invalidatesTags:["User"]
    }),
    deleteUser: builder.mutation({
      query: (id)=>({
        url: `users/${id}`,
        method:"DELETE",
      }),
      invalidatesTags:["User"]
    })
  }),
  overrideExisting: false,
}) 

export const { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation } = extendedApi