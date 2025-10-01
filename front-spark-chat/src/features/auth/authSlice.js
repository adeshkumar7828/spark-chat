import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentails: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = "";
    },
  },
});

export const { setCredentails, logout } = authSlice.actions;

export default authSlice.reducer;
