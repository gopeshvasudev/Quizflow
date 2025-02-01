import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useFetchQuizzes from "./useFetchQuizzes";

const useGetCorrectAnsweredIndexes = () => {
  const [correctAnsweredQuestionsIndex, setCorrectAnsweredQuestionsIndex] =
    useState([]);

  const questions = useSelector((store) => store.questions.questions);
  const { handler: fetchQuizzesHandler } = useFetchQuizzes();

  const handler = () => {
    //fetching the correct answered questions from the local storage
    let correctAnsweredQuestions = localStorage.getItem(
      "correctAnsweredQuestions"
    );
    correctAnsweredQuestions = JSON.parse(correctAnsweredQuestions) || [];

    //Finding the index of the correct answered questions and setting it into state
    const indexes = correctAnsweredQuestions?.map((correctQuestion) => {
      return questions?.findIndex(
        (question) => question.id === correctQuestion.id
      );
    });

    setCorrectAnsweredQuestionsIndex(indexes);
  };

  useEffect(() => {
    //Cheching if has questions or not, If not then again fetching it by calling custom hook
    if (questions.length > 0) {
      handler();
    } else {
      fetchQuizzesHandler();
    }
  }, [questions]);

  return { correctAnsweredQuestionsIndex };
};

export default useGetCorrectAnsweredIndexes;
