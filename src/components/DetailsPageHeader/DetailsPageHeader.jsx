import { useState } from "react";
import css from "./DetailsPageHeader.module.css";
import { Reviews } from "../Reviews/Reviews";
import { FeauturesPage } from "../FeauturesPage/FeauturesPage";
import { AppointmentForm } from "../AppointmentForm/AppointmentForm";

export const DetailsPageHeader = () => {
  const [isActive, setIsActive] = useState("feautures");

  return (
    <>
      <div className={css.titleContainer}>
        <h2 className={css.title} onClick={() => setIsActive("feautures")}>
          Features
        </h2>
        <h2 className={css.title} onClick={() => setIsActive("reviews")}>
          Reviews
        </h2>
      </div>
      <div className={css.container}>
        {isActive === "feautures" && <FeauturesPage />}
        {isActive === "reviews" && <Reviews />}
        <AppointmentForm />
      </div>
    </>
  );
};
