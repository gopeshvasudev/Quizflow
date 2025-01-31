import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions(state, actions) {
      state.questions = actions.payload;
    },
  },
});

export default questionsSlice.reducer;
export const { setQuestions } = questionsSlice.actions;
