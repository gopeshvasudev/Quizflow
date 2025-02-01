import React from "react";
import { useSelector } from "react-redux";

const SubQuestionContainer = ({ index, setOptionId }) => {
  const questions = useSelector((store) => store.questions.questions);

  return (
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
  );
};

export default SubQuestionContainer;
