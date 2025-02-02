import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homepageAlert: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setHomepageAlert(state, action) {
      state.homepageAlert = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { setHomepageAlert } = appSlice.actions;
