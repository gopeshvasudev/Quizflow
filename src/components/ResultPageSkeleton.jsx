import React from "react";

const ResultPageSkeleton = () => {
  return (
    <div className="w-full sm:w-[600px] h-full rounded-lg bg-zinc-900 flex flex-col items-center justify-center gap-6 px-6 py-10">
      <div className="animate-pulse w-[160px] sm:w-[200px] h-[160px] sm:h-[200px] rounded-full bg-zinc-700"></div>

      <div className="w-full flex flex-col gap-2">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="animate-pulse w-full h-4 rounded-lg bg-zinc-800"
          ></div>
        ))}
      </div>

      <div className="animate-pulse w-full h-24 rounded-lg bg-zinc-800"></div>

      <div className="animate-pulse w-1/2 h-14 rounded-full bg-zinc-800"></div>

      <div className="animate-pulse w-1/2 h-4 rounded-full bg-zinc-800"></div>
    </div>
  );
};

export default ResultPageSkeleton;
