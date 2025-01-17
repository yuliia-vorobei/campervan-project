import { useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  const handleCatalogPage = () => {
    navigate("/catalog");
  };

  return (
    <main>
      <section className={css.hero}>
        <div className={css.container}>
          <div className={css.textContainer}>
            <h1 className={css.title}>Campers of your dreams</h1>
            <p className={css.text}>
              You can find everything you want in our catalog
            </p>
          </div>
          <button
            className={css.button}
            type="button"
            onClick={handleCatalogPage}
          >
            View Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
