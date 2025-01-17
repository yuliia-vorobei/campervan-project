import css from "./DetailsPageHeader.module.css";

export const DetailsPageHeader = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Features</h2>
      <h2 className={css.title}>Reviews</h2>
    </div>
  );
};
