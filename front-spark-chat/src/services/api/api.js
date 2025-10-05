import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    credentials: "include", // line for cookies to include
  }),
  tagTypes: ["Conversations"],
  endpoints: () => ({}),
});
