import React, { useState } from "react";
import { useSelector } from "react-redux";
import useNextQuestionHandler from "../hooks/useNextQuestionHandler";
import useLeaveQuestionHandler from "../hooks/useLeaveQuestionHandler";

const QuestionContainer = () => {
  const [index, setIndex] = useState(0);
  const [optionId, setOptionId] = useState(null);

  const questions = useSelector((store) => store.questions.questions);

  const { handler: nextQuestionHandler } = useNextQuestionHandler(
    optionId,
    index,
    setIndex
  );

  const { handler: leaveQuestionHandler } = useLeaveQuestionHandler(
    index,
    setIndex
  );

  return (
    <div className="question-container w-full sm:w-[600px] h-[90vh] bg-black rounded-lg overflow-hidden p-2 flex flex-col gap-5">
      <div className="scrollbar-none overflow-y-auto w-full h-[88%] flex flex-col justify-between gap-5 p-1">
        <p className="text-xl font-light tracking-wider">
          <label className="block font-semibold">Question: {index + 1}</label>
          {questions[index]?.description}
        </p>

        <div className="options flex flex-col gap-2">
          {questions[index]?.options?.map((option) => (
            <button
              key={option.id}
              onFocus={() => setOptionId(option.id)}
              className="option w-full rounded-lg p-2 bg-zinc-100 text-black font-medium tracking-wider cursor-pointer leading-[1.3] duration-300 focus:bg-green-500 focus:text-white"
            >
              {option.description}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-[12%] flex items-center gap-2">
        <button
          onClick={leaveQuestionHandler}
          className="w-1/2 h-full px-2 py-2 bg-black text-red-500 text-lg leading-none rounded-lg hover:tracking-widest duration-300 border-2 border-red-500"
        >
          {index !== questions?.length - 1
            ? "Leave Question"
            : "Leave and Submit"}
        </button>

        <button
          onClick={nextQuestionHandler}
          className="w-1/2 h-full px-2 py-2 bg-black text-green-500 text-lg leading-none rounded-lg hover:tracking-widest duration-300 border-2 border-green-500"
        >
          {index !== questions?.length - 1 ? "Next Question" : "Submit Quiz"}
        </button>
      </div>
    </div>
  );
};

export default QuestionContainer;
