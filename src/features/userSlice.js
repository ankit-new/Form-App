import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    signup: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = {};
    },
  },
});

export const { login, logout, signup } = userSlice.actions;

export default userSlice.reducer;
