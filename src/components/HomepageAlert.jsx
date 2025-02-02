import { BiSolidErrorAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setHomepageAlert } from "../store/reducers/app.slice";

const HomepageAlert = () => {
  const dispatch = useDispatch();

  return (
    <div className="fixed top-0 left-0 h-screen w-full z-50 backdrop-blur-sm flex items-center justify-center p-2">
      <div className="p-4 rounded-lg bg-zinc-950 text-white flex flex-col items-center gap-4">
        <div className="text-4xl text-flow-400">
          <BiSolidErrorAlt />
        </div>

        <p className="text-2xl tracking-wide text-center">
          Wait! Are you sure you want to exit the quiz?
        </p>

        <div className="w-full flex items-center gap-2">
          <button
            onClick={() => dispatch(setHomepageAlert(false))}
            className="w-1/2 p-2 bg-black border border-white rounded-lg cursor-pointer duration-300 hover:tracking-widest hover:border-flow-400"
          >
            No
          </button>

          <Link
            to={"/"}
            className="w-1/2 p-2 bg-black border border-white rounded-lg cursor-pointer duration-300 flex items-center justify-center hover:tracking-widest hover:border-flow-400"
          >
            Yes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomepageAlert;
