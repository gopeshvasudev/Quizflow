import { configureStore } from "@reduxjs/toolkit";

import questionsReducer from "./reducers/questions.slice";
import appReducer from "./reducers/app.slice";

const store = configureStore({
  reducer: {
    questions: questionsReducer,
    app: appReducer,
  },
});

export default store;
