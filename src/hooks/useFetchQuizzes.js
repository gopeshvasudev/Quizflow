import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { setQuestions } from "../store/reducers/questions.slice";

const useFetchQuizzes = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handler = useCallback(async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/Uw5CrX");
      const data = await res.json();

      if (data?.questions) {
        dispatch(setQuestions(data.questions));
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      setError(err.message || "Something went wrong! Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  return { handler, loading, error };
};

export default useFetchQuizzes;
