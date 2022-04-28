import HeroImage from "assets/images/quiz.png";
import { useQuizContext } from "context";
import { useLocation, useNavigate } from "react-router-dom";
import "./category-page.css";

const CategoryPage = () => {
  // from react-router-dom
  const navigate = useNavigate();
  const {
    state: { categoryName },
  } = useLocation();

  // from quiz context
  const {
    quizState: { categoryList },
  } = useQuizContext();

  // filtering data according to the category selected
  const filteredCategoryList = [...categoryList].filter((category) =>
    category.name.includes(categoryName)
  );

  return (
    <main className="main">
      <h2>Select a category to start the Quiz:</h2>
      {filteredCategoryList.length ? (
        <div className="category-container">
          {filteredCategoryList?.map((category) => (
            <div key={category.id} className="card category card-box-shadow">
              <img className="image-resp" src={HeroImage} alt="category" />
              <h4>{category.name}</h4>
              <button
                className="btn btn-primary width-100"
                onClick={() => {
                  navigate("/rules", { state: { id: category.id } });
                }}
              >
                Play quiz
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-center">Loading...</h2>
      )}
    </main>
  );
};

export { CategoryPage };
