import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    postUserDataForRegistration: builder.mutation({
      query: (userData) => ({
        url: "/api/users/register",
        method: "POST",
        body: { ...userData },
      }),
    }),
  }),
});

export const { usePostUserDataForRegistrationMutation } = api;
