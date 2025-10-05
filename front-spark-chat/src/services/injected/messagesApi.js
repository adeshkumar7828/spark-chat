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
    }),

    getMessagesByConvId: builder.query({
      query: (_id) => ({
        url: `/api/messages/${_id}`,
        method: "GET",
      }),
      providesTags: ["Messages"],

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
