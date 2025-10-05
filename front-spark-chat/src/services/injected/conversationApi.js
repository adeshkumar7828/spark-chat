import { api } from "../api/api.js";

export const conversationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postNewConversation: builder.mutation({
      query: (data) => ({
        url: "/api/conversations",
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["Conversations"],
    }),

    getAllConversations: builder.query({
      query: () => ({
        url: "api/conversations",
        method: "GET",
      }),
      providesTags: ["Conversations"],
    }),
  }),
});

export const { usePostNewConversationMutation, useGetAllConversationsQuery } =
  conversationApi;
