import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css.textContainer}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
        </div>
        <button className={css.button} type="button">
          View Now
        </button>
      </div>
    </section>
  );
};

export default HomePage;
