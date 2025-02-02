import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homepageAlert: false,
  isQuizDetailsAreVisible: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setHomepageAlert(state, action) {
      state.homepageAlert = action.payload;
    },

    setIsQuizDetailsReVisible(state, action) {
      state.isQuizDetailsAreVisible = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { setHomepageAlert, setIsQuizDetailsReVisible } = appSlice.actions;
