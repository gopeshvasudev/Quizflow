import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    localStorage.setItem("correctAnsweredQuestions", JSON.stringify([]));
  }, []);

  return (
    <>
      <section className="w-full h-screen flex items-center justify-center flex-col">
        <div>
          <h1 className="text-6xl sm:text-8xl py-4 sm:px-10 text-flow-400 font-bold text-center">
            Quiz | Flow
          </h1>

          <h2 className="text-7xl sm:text-8xl xl:text-9xl bg-black py-2 px-5 sm:px-10 text-white font-bold text-center">
            Play. Learn. Win
          </h2>

          <p className="text-xl sm:text-2xl text-center py-2 bg-black">
            Fun challenges that make you smarter!
          </p>
        </div>

        <Link
          to={"/quizzes"}
          className="bg-black text-white text-lg rounded-full py-6 px-14 mt-12 duration-300 cursor-pointer border-2 border-white hover:border-flow-400 hover:tracking-widest overflow-hidden"
        >
          Unlock the Challenge
        </Link>
      </section>
    </>
  );
};

export default Home;
