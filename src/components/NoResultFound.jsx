import React from "react";
import { Link } from "react-router-dom";

const NoResultFound = ({ error }) => {
  return (
    <div className="w-full sm:w-[600px] h-full rounded-lg p-4 bg-zinc-950 flex flex-col items-center justify-center gap-5">
      <h6 className="text-center text-4xl tracking-wide text-flow-400">
        {error || "Something went wrong! Please try again later."}
      </h6>

      <Link
        to={"/"}
        className=" py-3 px-8 text-lg bg-black border-2 border-white rounded-full duration-300 hover:border-flow-400 hover:tracking-widest"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NoResultFound;
