import React, { useState } from "react";
import { useSelector } from "react-redux";
import useNextQuestionHandler from "../hooks/useNextQuestionHandler";
import useLeaveQuestionHandler from "../hooks/useLeaveQuestionHandler";
import SubQuestionContainer from "./SubQuestionContainer";

const QuestionContainer = () => {
  const [index, setIndex] = useState(0);
  const [optionId, setOptionId] = useState(null);

  const questions = useSelector((store) => store.questions.questions);

  //Next question handler
  const { handler: nextQuestionHandler } = useNextQuestionHandler(
    optionId,
    index,
    setIndex
  );

  //Leave question handler
  const { handler: leaveQuestionHandler } = useLeaveQuestionHandler(
    index,
    setIndex
  );

  return (
    <div className="question-container w-full sm:w-[600px] h-[90vh] bg-black rounded-lg overflow-hidden p-2 flex flex-col gap-5">
      <SubQuestionContainer index={index} setOptionId={setOptionId} />

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
