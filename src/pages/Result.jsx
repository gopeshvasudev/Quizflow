import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import useFetchQuizzes from "../hooks/useFetchQuizzes";
import useGetCorrectAnsweredIndexes from "../hooks/useGetCorrectAnsweredIndexes";

const Result = () => {
  const questions = useSelector((store) => store.questions.questions);

  const { correctAnsweredQuestionsIndex } = useGetCorrectAnsweredIndexes();

  return (
    <section className="w-full h-screen p-4 flex justify-center">
      <div className="w-full sm:w-[600px] h-full bg-zinc-950 text-white rounded-lg flex flex-col gap-4 items-center">
        <div>
          {correctAnsweredQuestionsIndex?.map((index) => {
            return index;
          })}
        </div>
      </div>
    </section>
  );
};

export default Result;
