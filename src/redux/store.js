import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { authApi } from "./apis/auth.api";
import { appReducers } from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: [],
  // whitelist: ['userSlice'],
  timeout: 0,
};

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    // AsyncStorage.removeItem('persist:root')
    return appReducers(undefined, action)
  }
  return appReducers(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export const persistor = persistStore(store);
