import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./Chat/chatSlice";

export default configureStore({
  reducer: {
    chat: chatReducer,
  },
});
