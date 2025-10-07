import { api } from "../api/api";

const messagesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createMessages: builder.mutation({
      query: (msgObj) => ({
        url: "/api/messages",
        method: "POST",
        body: { ...msgObj },
      }),
      invalidatesTags: ["Messages"],

      /*  keeping for later: invalidatesTags: (result, error, msgObj) => [
     { type: "Messages", id: msgObj.conversationId },
      ],*/
    }),

    getMessagesByConvId: builder.query({
      query: (_id) => ({
        url: `/api/messages/${_id}`,
        method: "GET",
      }),
      providesTags: ["Messages"],

      /* keeping for later: providesTags: (result, error, _id) => [{ type: "Messages", id: _id }],*/

      onQueryStarted: async (_id, { dispatch, queryFulfilled }) => {
        try {
          const data = await queryFulfilled;
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useCreateMessagesMutation, useGetMessagesByConvIdQuery } =
  messagesApi;
