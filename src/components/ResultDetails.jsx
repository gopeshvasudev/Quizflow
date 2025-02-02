import { Link } from "react-router-dom";
import { MdOutlineDoneAll } from "react-icons/md";
import { GiTrophy } from "react-icons/gi";
import { MdReplay } from "react-icons/md";

import { getSummary } from "../utils/utilityFunctions";
import QuestionNumberCircle from "./QuestionNumberCircle";

const ResultDetails = ({ correctAnsweredQuestionsIndex }) => {
  return (
    <div className="w-full sm:w-[600px] h-full bg-zinc-950 text-white rounded-lg flex flex-col gap-6 items-center justify-center scrollbar-none overflow-y-auto px-6 py-10">
      <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full border-4 border-white flex items-center justify-center text-9xl text-flow-400 shrink-0">
        {correctAnsweredQuestionsIndex?.length < 8 ? (
          <MdOutlineDoneAll />
        ) : (
          <GiTrophy />
        )}
      </div>

      <p className="text-center text-xl sm:text-2xl tracking-wide">
        {getSummary(correctAnsweredQuestionsIndex?.length)}
      </p>

      <div className="score flex flex-col items-center gap-2">
        <div className="flex items-center flex-wrap justify-center gap-2">
          {[...Array(10)].map((_, index) =>
            correctAnsweredQuestionsIndex?.includes(index) ? (
              <QuestionNumberCircle isCorrect={true} index={index} />
            ) : (
              <QuestionNumberCircle isCorrect={false} index={index} />
            )
          )}
        </div>

        <h6 className="text-xl tracking-wide text-zinc-400">
          Your score is:{" "}
          <span className="text-white">
            {correctAnsweredQuestionsIndex?.length}/10
          </span>
        </h6>
      </div>

      <div className="buttons flex flex-col items-center gap-2 mt-5">
        <Link
          to={"/"}
          className=" py-3 px-8 text-lg bg-black border-2 border-white rounded-full duration-300 hover:border-flow-400 hover:tracking-widest"
        >
          Go back to Home
        </Link>

        <Link to={"/quizzes"} className="flex items-center text-lg">
          <span>
            <MdReplay />
          </span>
          Replay
        </Link>
      </div>
    </div>
  );
};

export default ResultDetails;
