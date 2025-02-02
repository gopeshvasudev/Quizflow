import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useNextQuestionHandler = (optionId, index, setIndex) => {
  const questions = useSelector((store) => store.questions.questions);
  const navigate = useNavigate();

  const handler = () => {
    //Finding the option
    const selectedOption = questions[index]?.options?.find(
      (option) => option.id === optionId
    );

    //Validating if the option is selected or not.
    if (selectedOption) {
      //Checking if the option is correct or not, If it is correct then adding the correct answered question into localstorage.
      if (selectedOption.is_correct) {
        //Fetching the old correct answered questions and parsing it.
        let correctAnsweredQuestions =
          localStorage.getItem("correctAnsweredQuestions") || "[]";
        correctAnsweredQuestions = JSON.parse(correctAnsweredQuestions);

        //Adding the new values and updating the storage.
        correctAnsweredQuestions.push({ id: questions[index]?.id });
        localStorage.setItem(
          "correctAnsweredQuestions",
          JSON.stringify(correctAnsweredQuestions)
        );
      }
    } else {
      //If user didn't select the option then showing the error.
      toast.error("Please select a option!");
      return;
    }

    //Checking if the index is small than questions length or not, If yes then increase the index by one so that new question will get appear.
    if (index < questions?.length - 1) {
      setIndex(index + 1);
    } else {
      //If the index in not small than the questions length, It means we reached the last question in that case we are redirecting to the user to the result's page.
      navigate("/result");
    }
  };

  return { handler };
};

export default useNextQuestionHandler;
