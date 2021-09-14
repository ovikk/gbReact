import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import chatReducer from "./Chat/chatSlice";
import catReducer from "./Cats/catSlice";
import thunkMiddleware from "redux-thunk";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["cats", "chat"],
};

const reducers = combineReducers({ chat: chatReducer, cats: catReducer });

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});
