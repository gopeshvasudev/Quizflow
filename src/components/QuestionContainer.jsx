import React from "react";

const QuestionContainer = () => {
  return (
    <div className="question-container w-full sm:w-[600px] h-[90vh] bg-black rounded-lg overflow-hidden p-2">
      <div className=".scrollbar-none overflow-y-auto w-full h-[88%]"></div>

      <div className="w-full h-[12%] flex items-center gap-2">
        <button className="w-1/2 h-full px-2 py-2 bg-flow-400 text-lg leading-none rounded-lg hover:tracking-widest duration-300">
          Leave Question
        </button>

        <button className="w-1/2 h-full px-2 py-2 bg-flow-400 text-lg leading-none rounded-lg hover:tracking-widest duration-300">
          Next Question
        </button>
      </div>
    </div>
  );
};

export const QuestionContainerSkeleton = () => {
  return (
    <div className="w-full sm:w-[600px] h-[90vh] rounded-lg bg-zinc-900 p-4">
      <div>
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="w-full h-5 rounded-md bg-zinc-700 mb-3 animate-pulse"
          ></div>
        ))}

        <div className="w-10/12 h-5 rounded-md bg-zinc-700 mb-3 animate-pulse"></div>
      </div>

      <div className="mt-10">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="w-full flex items-center gap-2 mt-2 animate-pulse"
          >
            <div className="w-1/2 h-10 rounded-md bg-zinc-800"></div>
            <div className="w-1/2 h-10 rounded-md bg-zinc-800"></div>
          </div>
        ))}
      </div>

      <div className="w-full h-10 rounded-md bg-zinc-800 mt-20 animate-pulse"></div>
    </div>
  );
};

export default QuestionContainer;
