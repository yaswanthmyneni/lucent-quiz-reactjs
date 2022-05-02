import { Link } from "react-router-dom";
import HeroImage from "assets/images/quiz.png";
import "./home-page.css";

const HomePage = () => {
  const categories = [
    { id: 1, name: "Science" },
    { id: 2, name: "Entertainment" },
  ];

  return (
    <main className="main">
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero-text-container">
            <h1>Let's Explore Quiz</h1>
            <p>
              What to improve your knowledge of the yogic principles? Then this
              is the right place to explore.
            </p>
            <a href="#category">
              <button className="btn btn-primary">Explore Now</button>
            </a>
          </div>
          <div className="hero-img-container">
            <img className="image-resp" src={HeroImage} alt="hero" />
          </div>
        </div>
      </section>

      <section id="category" className="category-section">
        <h2>Categories</h2>
        <div className="category-container">
          {categories.map((category) => (
            <Link
              key={category.id}
              to="/categories"
              className="card category card-box-shadow"
              state={{ categoryName: category.name }}
            >
              <img className="image-resp" src={HeroImage} alt="category" />
              <h4>{category.name}</h4>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export { HomePage };
