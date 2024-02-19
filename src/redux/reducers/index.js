import { combineReducers } from "@reduxjs/toolkit";
import generalSlice from "./generalSlice";
import { authApi } from "../apis/auth.api";
import userSlice from "./userSlice";
import { chatRoomApi } from "../apis/chatroom.api";

export const appReducers = combineReducers({
  generalSlice,
  userSlice,
  [authApi.reducerPath]: authApi.reducer,
  [chatRoomApi.reducerPath]: chatRoomApi.reducer,
});
