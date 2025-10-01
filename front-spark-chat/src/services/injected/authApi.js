import { setCredentails } from "../../features/auth/authSlice.js";
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
    }),

    postUserDataForLogin: builder.mutation({
      query: (credentials) => ({
        url: "/api/auth/login",
        method: "POST",
        body: { ...credentials },
      }),

      onQueryStarted: async (credentials, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentails(data));
        } catch (err) {
          console.error(err);
        }
      },
    }),
  }),
});

export const {
  usePostUserDataForRegistrationMutation,
  usePostUserDataForLoginMutation,
} = authApi;
