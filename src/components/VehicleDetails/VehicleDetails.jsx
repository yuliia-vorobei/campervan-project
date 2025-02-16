import { useSelector } from "react-redux";
import css from "./VehicleDetails.module.css";
import { Loader } from "../Loader/Loader";

export const VehicleDetails = () => {
  const transportation = useSelector((state) => state.transport);
  const camper = transportation?.camper;

  if (!camper) {
    return <Loader />;
  }

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle details</h3>
      <ul className={css.list}>
        <li className={css.item}>
          <p>Form</p>
          <p>{camper.form}</p>
        </li>
        <li className={css.item}>
          <span>Length</span>
          <span>{camper.length}</span>
        </li>
        <li className={css.item}>
          <span>Width</span>
          <span>{camper.width}</span>
        </li>
        <li className={css.item}>
          <span>Height</span>
          <span>{camper.height}</span>
        </li>
        <li className={css.item}>
          <span>Tank</span>
          <span>{camper.tank}</span>
        </li>
        <li className={css.item}>
          <span>Consumption</span>
          <span>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
};
