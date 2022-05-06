import {
  CategoryPage,
  HomePage,
  RulesPage,
  QuestionPage,
  ResultPage,
} from "pages";
import { Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoryPage />} />
      <Route path="/rules" element={<RulesPage />} />
      <Route path="/quiz" element={<QuestionPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
};

export { Routing };
