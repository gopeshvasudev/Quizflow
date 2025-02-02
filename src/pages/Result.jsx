import useGetCorrectAnsweredIndexes from "../hooks/useGetCorrectAnsweredIndexes";
import ResultPageSkeleton from "../components/ResultPageSkeleton";
import NoResultFound from "../components/NoResultFound";
import ResultDetails from "../components/ResultDetails";

const Result = () => {
  const { correctAnsweredQuestionsIndex, loading, error } =
    useGetCorrectAnsweredIndexes();

  return (
    <section className="w-full h-screen p-4 flex justify-center">
      {loading ? (
        <ResultPageSkeleton />
      ) : error ? (
        <NoResultFound error={error} />
      ) : (
        <ResultDetails
          correctAnsweredQuestionsIndex={correctAnsweredQuestionsIndex}
        />
      )}
    </section>
  );
};

export default Result;
