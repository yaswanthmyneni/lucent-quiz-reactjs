import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "context";
import { BsFillArrowRightCircleFill } from "assets/icons/icons";
import "./question-page.css";

const QuestionPage = () => {
  const [state, setState] = useState({
    questionNumber: 0,
    userAnsweredIndex: null,
    answer: {},
  });
  const { questionNumber, userAnsweredIndex, answer } = state;

  // from react-router-dom
  const navigate = useNavigate();

  // from quiz context
  const {
    quizState: { questions },
    quizDispatch,
  } = useQuizContext();

  return (
    <main className="question-page-main">
      <div className="flex flex-direction">
        <h2 className="text-center m-b-24">Quiz Name</h2>
        {questions.map((questionDetails, questionIndex) => {
          if (questionIndex === questionNumber) {
            return (
              <Fragment key={questionIndex}>
                <p>Question: {questionIndex + 1} / 5</p>
                <h4 className="m-b-2rem">{questionDetails.question}</h4>
                <button
                  className={`btn ${
                    userAnsweredIndex === 1
                      ? "answered-option-color"
                      : "btn-primary"
                  }`}
                  onClick={(e) => {
                    setState({
                      ...state,
                      answer: { [questionIndex]: e.target.innerHTML },
                      userAnsweredIndex: 1,
                    });
                  }}
                >
                  {questionDetails.correct_answer}
                </button>
                {questionDetails.incorrect_answers.map(
                  (option, optionIndex) => (
                    <button
                      key={optionIndex}
                      className={`btn ${
                        userAnsweredIndex === optionIndex + 2
                          ? "answered-option-color"
                          : "btn-primary"
                      }`}
                      onClick={(e) => {
                        setState({
                          ...state,
                          answer: { [questionIndex]: e.target.innerHTML },
                          userAnsweredIndex: optionIndex + 2,
                        });
                      }}
                    >
                      {option}
                    </button>
                  )
                )}
                <div className="flex flex-end">
                  <p
                    className="text-xl cursor"
                    onClick={() => {
                      if (questionIndex < 4) {
                        setState({
                          ...state,
                          questionNumber: questionIndex + 1,
                          userAnsweredIndex: null,
                        });
                        quizDispatch({
                          type: "SET_USER_ANSWER",
                          payload: answer,
                        });
                      } else {
                        quizDispatch({
                          type: "SET_USER_ANSWER",
                          payload: answer,
                        });
                        setState({
                          ...state,
                          userAnsweredIndex: null,
                        });
                        navigate("/result");
                      }
                    }}
                  >
                    {questionIndex === 4 ? "Finish" : "Next"}
                    <BsFillArrowRightCircleFill />
                  </p>
                </div>
              </Fragment>
            );
          }
          return "";
        })}
      </div>
    </main>
  );
};

export { QuestionPage };
