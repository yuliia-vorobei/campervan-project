import { Features } from "../Feautures/Features";
import { VehicleDetails } from "../VehicleDetails/VehicleDetails";
import css from "./FeauturesPage.module.css";

export const FeauturesPage = () => {
  return (
    <section className={css.container}>
      <Features />
      <VehicleDetails />
    </section>
  );
};
