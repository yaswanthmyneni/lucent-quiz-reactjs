import { CategoryPage, HomePage } from "pages";
import { Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoryPage />} />
    </Routes>
  );
};

export { Routing };
