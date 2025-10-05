import { setCredentials } from "../../features/auth/authSlice.js";
import { api } from "../api/api.js";

//  baseUrl: "http://localhost:3000"

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postUserDataForRegistration: builder.mutation({
      query: (userData) => ({
        url: "/api/users/register",
        method: "POST",
        body: { ...userData },
      }),
      invalidatesTags: ["User"],
    }),

    postUserDataForLogin: builder.mutation({
      query: (credentials) => ({
        url: "/api/auth/login",
        method: "POST",
        body: { ...credentials },
      }),

      invalidatesTags: ["User"],

      onQueryStarted: async (credentials, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch (err) {
          console.error(err);
        }
      },
    }),

    getUserDataFromCookies: builder.query({
      query: () => ({
        url: "/api/users/me",
        method: "GET",
      }),

      providesTags: ["User"],
    }),

    getAllUsers: builder.query({
      query: (query) => ({
        url: `/api/users/${query}`,
        method: "GET",
      }),

      providesTags: ["User"],
    }),
  }),
});

export const {
  usePostUserDataForRegistrationMutation,
  usePostUserDataForLoginMutation,
  useGetUserDataFromCookiesQuery,
  useGetAllUsersQuery,
} = authApi;
