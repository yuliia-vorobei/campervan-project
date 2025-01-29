import { useState } from "react";
import clsx from "clsx";
import css from "./DetailsPageHeader.module.css";
import { Reviews } from "../Reviews/Reviews";
import { FeauturesPage } from "../FeauturesPage/FeauturesPage";
import { AppointmentForm } from "../AppointmentForm/AppointmentForm";

export const DetailsPageHeader = () => {
  const [isActive, setIsActive] = useState("feautures");

  const activeClass = (tab) => {
    return clsx(css.title, tab === isActive && css.active);
  };

  return (
    <>
      <div className={css.titleContainer}>
        <h2
          className={activeClass("feautures")}
          onClick={() => setIsActive("feautures")}
        >
          Features
        </h2>
        <h2
          className={activeClass("reviews")}
          onClick={() => setIsActive("reviews")}
        >
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
