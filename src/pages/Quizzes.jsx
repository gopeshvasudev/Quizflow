import { useEffect } from "react";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import useFetchQuizzes from "../hooks/useFetchQuizzes";
import QuestionContainer, {
  QuestionContainerSkeleton,
} from "../components/QuestionContainer";

const Quizzes = () => {
  const { handler, loading, error } = useFetchQuizzes();
  const questions = useSelector((store) => store.questions.questions);

  useEffect(() => {
    if (questions.length === 0) {
      handler();
    }
  }, [questions]);

  return (
    <section className="w-full h-screen p-4 flex flex-col items-center gap-4">
      <Navbar />

      {loading ? <QuestionContainerSkeleton /> : <QuestionContainer />}
    </section>
  );
};

export default Quizzes;
