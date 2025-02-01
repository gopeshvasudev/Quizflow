const QuestionContainerSkeleton = () => {
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

export default QuestionContainerSkeleton;
