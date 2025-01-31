import { configureStore } from "@reduxjs/toolkit";

import questionsReducer from "./reducers/questions.slice";

const store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
});

export default store;
