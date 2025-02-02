import React from "react";
import { RiHome4Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setHomepageAlert } from "../store/reducers/app.slice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="w-full sm:w-[600px] min-h-[10vh] bg-black rounded-lg flex items-center justify-between gap-2 flex-wrap  px-4">
      <h1 className="text-4xl font-bold tracking-wide text-flow-400">
        Quiz | Flow
      </h1>

      <div className="flex items-center">
        <button
          onClick={() => dispatch(setHomepageAlert(true))}
          className=" inline-block text-xl bg-zinc-900 p-3 rounded-full cursor-pointer hover:text-flow-400 duration-300"
        >
          <RiHome4Fill />
        </button>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
