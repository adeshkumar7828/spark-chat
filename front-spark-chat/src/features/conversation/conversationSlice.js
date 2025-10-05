import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversationName: "",
};

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    addConversationName: (state, action) => {
      state.conversationName = action.payload;
    },
  },
});

export const { addConversationName } = conversationSlice.actions;

export default conversationSlice.reducer;
