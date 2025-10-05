import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversationName: "",
  currentSelectedConvId: null,
};

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    addConversationName: (state, action) => {
      state.conversationName = action.payload;
    },

    changeCurrentConvId: (state, action) => {
      state.currentSelectedConvId = action.payload;
    },
  },
});

export const { addConversationName, changeCurrentConvId } =
  conversationSlice.actions;

export default conversationSlice.reducer;
