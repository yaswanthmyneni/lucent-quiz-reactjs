import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuizContext } from "context";
import axios from "axios";
import HeroImage from "assets/images/quiz.png";
import "./rules-page.css";

const RulesPage = () => {
  // from react-router-dom
  const {
    state: { id },
  } = useLocation();
  const navigate = useNavigate();

  // from quiz context
  const { quizDispatch } = useQuizContext();

  useEffect(() => {
    // function to get selected category details
    const getCategoryDetails = async (id) => {
      const response = await axios({
        method: "get",
        url: `https://opentdb.com/api.php?amount=5&category=${id}&type=multiple`,
      });
      quizDispatch({ type: "GET_QUESTIONS", payload: response.data.results });
    };
    getCategoryDetails(id);
  }, [id, quizDispatch]);

  const dateObj = new Date();
  var currentDate =
    dateObj.getUTCMonth() +
    1 +
    " - " +
    dateObj.getUTCDate() +
    " - " +
    dateObj.getUTCFullYear();

  return (
    <main className="rules-page-main">
      <div className="margin-lr-3rem">
        <div className="flex align-center">
          <div className="image-container">
            <img className="image-resp" src={HeroImage} alt="selected" />
          </div>
          <div className="width-16rem">
            <div className="flex align-center">
              <h3>Date:</h3>
              <h5>{currentDate}</h5>
            </div>
            <div className="flex align-center">
              <h3>Time Limit:</h3>
              <h5>30 mins</h5>
            </div>
            <div className="flex align-center">
              <h3>Attempts:</h3>
              <h5>1</h5>
            </div>
            <div className="flex align-center">
              <h3>Points</h3>
              <h5>50</h5>
            </div>
          </div>
        </div>
        <div className="m-t-2rem">
          <h2>Rules:</h2>
          <ol>
            <li>
              <h5>The following quiz contains the multiple choices.</h5>
            </li>
            <li>
              <h5>Each question carries ten points</h5>
            </li>
            <li>
              <h5>You cannot go back to the previous question.</h5>
            </li>
            <li>
              <h5>
                The winners will be contacted by e-mail, in order to obtain
                their postal address where the prize will be sent to.
              </h5>
            </li>
          </ol>
        </div>
        <div className="text-center" onClick={() => navigate("/quiz")}>
          <button className="btn btn-primary">Start quiz</button>
        </div>
      </div>
    </main>
  );
};

export { RulesPage };
