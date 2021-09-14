import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    isAuthenticated: false,
    messages: {},
    profiles: [
      {
        id: 2,
        name: "Joe Doe",
        avatar: "https://material-ui.com/static/images/avatar/1.jpg",
      },
      {
        id: 3,
        name: "Иван Кузнецов",
        avatar: "https://material-ui.com/static/images/avatar/2.jpg",
      },
    ],

    myId: 1,
  },
  reducers: {
    addMessage: (state, action) => {
      const { chatId, messageText, authorId } = action.payload;
      state.messages = {
        ...state.messages,
        [chatId]: [
          ...state.messages[chatId],
          {
            timeStamp: moment().valueOf(),
            authorId,
            text: messageText,
          },
        ],
      };
    },

    setMessages: (state, action) => {
      const { chatId, messages } = action.payload;

      console.log(action, "ACTION");

      state.messages = {
        ...state.messages,
        [chatId]: messages,
      };
    },

    changeIsAuth: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMessage, changeIsAuth, setMessages } = chatSlice.actions;

export default chatSlice.reducer;
