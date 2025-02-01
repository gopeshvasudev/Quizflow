import React from "react";

const QuestionNumberCircle = ({ isCorrect, index }) => {
  return (
    <div
      key={index}
      className={`w-[35px] h-[35px] rounded-full flex items-center justify-center text-xl ${
        isCorrect ? "bg-flow-400" : "bg-zinc-800"
      }`}
    >
      {index + 1}
    </div>
  );
};

export default QuestionNumberCircle;
