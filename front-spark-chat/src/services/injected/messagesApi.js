import { api } from "../api/api";
import { socket } from "../../socket/socket";
// import { current } from "@reduxjs/toolkit";

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

      async onCacheEntryAdded(_id, { updateCachedData, cacheEntryRemoved }) {
        try {
          socket.emit("joinRoom", _id);

          const handleNewMessage = (newMsg) => {
            if (newMsg.createdMsg.conversationId === _id) {
              updateCachedData((draft) => {
                // console.log("Current state of draft:", current(draft));
                // console.log("New message to add:", newMsg);
                // added above two line for debugging
                draft.requestedMessagesOfConversation.push(newMsg.createdMsg);
              });
            }
          };

          socket.on("messageReceived", handleNewMessage);

          await cacheEntryRemoved;
          socket.off("messageReceived", handleNewMessage);
          socket.emit("leaveRoom", _id);
        } catch (err) {
          console.error("Socket listener error:", err);
        }
      },
    }),
  }),
});

export const { useCreateMessagesMutation, useGetMessagesByConvIdQuery } =
  messagesApi;
