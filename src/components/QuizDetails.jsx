import { useDispatch } from "react-redux";

import { quizDetailsData } from "../utils/constants";
import { setIsQuizDetailsReVisible } from "../store/reducers/app.slice";
import { Link } from "react-router-dom";
import { MdReplay } from "react-icons/md";

const QuizDetails = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[url(../assets/bg.webp)] bg-cover bg-no-repeat fixed top-0 left-0 w-full h-screen">
      <div className="w-full h-full bg-black/40 p-4 flex items-center justify-center">
        <div className="w-full sm:w-[600px] h-full rounded-lg bg-zinc-950 flex flex-col gap-10 py-10 px-6 items-center scrollbar-none overflow-y-auto">
          <h1 className="text-5xl tracking-wide text-center font-bold text-flow-400">
            Quiz Detials
          </h1>

          <div className="flex flex-col items-center justify-center gap-5">
            {quizDetailsData?.map((data) => (
              <div key={data.heading}>
                <h2 className="font-medium text-3xl tracking-wider text-center">
                  {data.heading}
                </h2>
                <p className="text-xl font-light tracking-wide text-zinc-300 text-center">
                  {data.summary}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2">
            <button
              onClick={() => dispatch(setIsQuizDetailsReVisible(false))}
              className="py-4 px-14 rounded-full text-lg bg-black border-2 border-white duration-300 cursor-pointer hover:border-flow-400 hover:tracking-widest"
            >
              Start Quiz
            </button>

            <Link to={"/"} className="flex items-center">
              <span className="text-lg">
                <MdReplay />
              </span>
              Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
