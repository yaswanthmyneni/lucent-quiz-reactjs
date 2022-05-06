import { useQuizContext } from "context";
import { Link } from "react-router-dom";
import "./result-page.css";

const ResultPage = () => {
// from quiz context
  const {
    quizState: { questions, userAnswers },
    quizDispatch,
  } = useQuizContext();

  // converting object values to array
  const userAnswersArray = Object.values(userAnswers);

  // counting the number of right answers
  const count = questions.reduce((acc, curr, index) => {
    if (curr.correct_answer === userAnswers[index]) {
      return (acc = acc + 1);
    }
    return acc;
  }, 0);

  return (
    <main className="result-page-main">
      <div className="flex flex-direction">
        <h2 className="text-center m-b-24">Result</h2>
        <h3 className="text-center m-b-24">Final Score: {count * 10}</h3>
        {questions.map((questionDetails, questionIndex) => {
          return (
            <div className="m-b-24" key={questionIndex}>
              <h4>{`${questionIndex + 1}. ${questionDetails.question}`}</h4>
              <div className="answer correct-answer">
                {questionDetails.correct_answer}
              </div>
              {questionDetails.incorrect_answers.map((incorrectAnswer, index) => (
                <div
                  key={index}
                  className={`answer ${
                    userAnswersArray[questionIndex] === incorrectAnswer
                      ? "wrong-answer"
                      : ""
                  }`}
                >
                  {incorrectAnswer}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="text-center m-b-4rem">
        <Link
          to="/"
          className="btn btn-primary link"
          onClick={() => {
            quizDispatch({ type: "CLEAR" });
          }}
        >
          Go to home page
        </Link>
      </div>
    </main>
  );
};

export { ResultPage };
