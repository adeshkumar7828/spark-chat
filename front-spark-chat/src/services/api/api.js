import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: "include", // line for cookies to include
  }),
  tagTypes: ["Conversations", "User", "Messages"],
  endpoints: () => ({}),
});
