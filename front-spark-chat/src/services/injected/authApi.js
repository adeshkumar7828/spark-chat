import { logout, setCredentials } from "../../features/auth/authSlice.js";
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
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch (err) {
          console.error(err);
        }
      },
    }),

    getAllUsers: builder.query({
      query: (query) => ({
        url: `/api/users/${query}`,
        method: "GET",
      }),

      providesTags: ["User"],
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: "api/auth/logout",
        method: "POST",
      }),

      invalidatesTags: ["User"],

      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(logout());

          // Reset the entire RTK Query cache
          dispatch(api.util.resetApiState());
        } catch (err) {
          // Even if the logout API call fails, proceed with client-side cleanup
          dispatch(logout());
          dispatch(api.util.resetApiState());
          console.error("Logout API call failed:", err);
        }
      },
    }),
  }),
});

export const {
  usePostUserDataForRegistrationMutation,
  usePostUserDataForLoginMutation,
  useGetUserDataFromCookiesQuery,
  useGetAllUsersQuery,
  useLogoutUserMutation,
} = authApi;
