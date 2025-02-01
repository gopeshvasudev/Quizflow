import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useLeaveQuestionHandler = (index, setIndex) => {
  const questions = useSelector((store) => store.questions.questions);
  const navigate = useNavigate();
  //If the user do not want to answer the question he or she can leave the question.
  const handler = () => {
    //Checking if the index is small than questions length or not, If yes then increase the index by one so that new question will get appear.
    if (index < questions?.length - 1) {
      setIndex(index + 1);
    } else {
      //If the index in not small than the questions length, It means we reached the last question in that case we are redirecting to the user to the result's page.
      navigate("/result");
    }
  };

  return { handler };
};

export default useLeaveQuestionHandler;
