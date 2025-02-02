import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

import Navbar from "../components/Navbar";
import useFetchQuizzes from "../hooks/useFetchQuizzes";
import QuestionContainer from "../components/QuestionContainer";
import QuestionContainerSkeleton from "../components/QuestionContainerSkeleton";
import HomepageAlert from "../components/HomepageAlert";
import QuizDetails from "../components/QuizDetails";

const Quizzes = () => {
  const { handler, loading, error } = useFetchQuizzes();

  const questions = useSelector((store) => store.questions.questions);
  const homepageAlert = useSelector((store) => store.app.homepageAlert);
  const isQuizDetailsAreVisible = useSelector(
    (store) => store.app.isQuizDetailsAreVisible
  );

  useEffect(() => {
    localStorage.setItem("correctAnsweredQuestions", JSON.stringify([]));

    if (questions.length === 0) {
      handler();
    }
  }, [questions]);

  return (
    <>
      {isQuizDetailsAreVisible ? (
        <QuizDetails />
      ) : (
        <section className="w-full h-screen p-4 flex flex-col items-center gap-4">
          {homepageAlert && <HomepageAlert />}
          <Toaster />
          <Navbar />

          {loading ? (
            <QuestionContainerSkeleton />
          ) : error ? (
            <h6 className="text-xl tracking-wide text-center">{error}</h6>
          ) : (
            <QuestionContainer />
          )}
        </section>
      )}
    </>
  );
};

export default Quizzes;
