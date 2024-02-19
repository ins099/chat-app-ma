import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  user: { _id: null, full_name: null, email: null },
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setAccessToken: (state, { payload }) => {
      state.accessToken = payload;
    },
    setUserToReducer: (state, { payload }) => {
      Object.keys(payload).map((key) => {
        state.user[key] = payload[key];
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAccessToken, setUserToReducer } = userSlice.actions;

export default userSlice.reducer;
