import { combineReducers } from "@reduxjs/toolkit";
import generalSlice from "./generalSlice";
import { authApi } from "../apis/auth.api";
import userSlice from "./userSlice";

export const appReducers = combineReducers({
  generalSlice,
  userSlice,
  [authApi.reducerPath]: authApi.reducer,
});
