import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { useToastContext } from "./toast-context";

const QuizContext = createContext();
const useQuizContext = () => useContext(QuizContext);

const quizReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_USER_ANSWER":
      return {
        ...state,
        userAnswers: { ...state.userAnswers, ...payload },
      };
    case "GET_QUESTIONS":
      return {
        ...state,
        questions: payload,
      };
    case "GET_CATEGORY_LIST":
      return {
        ...state,
        categoryList: payload,
      };
    case "CLEAR":
      return { questions: [], userAnswers: {} };
    default:
      return state;
  }
};

const QuizProvider = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, {
    questions: [],
    userAnswers: {},
    categoryList: [],
  });

  console.log(quizState.userAnswers);

  const { toastDispatch, getUniqueNumber } = useToastContext();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "https://opentdb.com/api_category.php",
        });
        quizDispatch({
          type: "GET_CATEGORY_LIST",
          payload: response.data.trivia_categories,
        });
      } catch (error) {
        console.error(error);
        toastDispatch({
          type: "ADD_TOAST",
          payload: {
            id: getUniqueNumber(),
            className: "toast-error",
            message: "error! check console",
          },
        });
      }
    };
    getCategories();
  }, [toastDispatch, getUniqueNumber]);

  const value = { quizState, quizDispatch };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export { useQuizContext, QuizProvider };
