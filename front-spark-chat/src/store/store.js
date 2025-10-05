import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query/react";
import { api } from "../services/api/api.js";

import authReducer from "../features/auth/authSlice.js";
import conversationReducer, {
  conversationSlice,
} from "../features/conversation/conversationSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer, //give default name
    [conversationSlice.name]: conversationReducer, //dynamic key naming
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);
