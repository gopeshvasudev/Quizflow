import React from "react";

const FallbackLoader = () => {
  return (
    <div className="w-full h-dvh bg-zinc-950 flex flex-col items-center justify-center px-[20%] sm:p-0 gap-2 overflow-hidden">
      <div className="relative w-full sm:w-[300px] transition-all h-4 rounded-full bg-zinc-900">
        <div className="animate-slider absolute top-0 left-0 h-full w-16 rounded-full bg-flow-400"></div>
      </div>

      <p className="text-lg">Loading</p>
    </div>
  );
};

export default FallbackLoader;
