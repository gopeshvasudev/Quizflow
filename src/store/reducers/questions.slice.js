import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  correctAnsweredQuestions: [],
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions(state, actions) {
      state.questions = actions.payload;
    },

    setCorrectAnsweredQuestions(state, action) {
      state.correctAnsweredQuestions.push(action.payload);
    },
  },
});

export default questionsSlice.reducer;
export const { setQuestions, setCorrectAnsweredQuestions } =
  questionsSlice.actions;
