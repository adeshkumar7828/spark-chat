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

    getConversationById: builder.query({
      query: (_id) => ({
        url: `/api/conversations/${_id}`,
        method: "GET",
      }),
      providesTags: (result, error, _id) => [{ type: "User", id: _id }],
    }),
  }),
});

export const {
  usePostNewConversationMutation,
  useGetAllConversationsQuery,
  useGetConversationByIdQuery,
} = conversationApi;
