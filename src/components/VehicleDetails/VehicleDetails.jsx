import { useSelector } from "react-redux";
import { selectOneTruck } from "../../redux/transportation/selectors";
import { useParams } from "react-router-dom";
import css from "./VehicleDetails.module.css";

export const VehicleDetails = () => {
  const { id } = useParams();
  const transportation = useSelector((state) => selectOneTruck(state, id));
  const { form, length, width, height, tank, consumption } = transportation;

  //   function splitVariable(variable) {
  //     const parts = variable.split(" ,");
  //     return parts;
  //   }

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle details</h3>
      <ul className={css.list}>
        <li className={css.item}>
          <p>Form</p>
          <p>{form}</p>
        </li>
        <li className={css.item}>
          <span>Length</span>
          <span>{length}</span>
        </li>
        <li className={css.item}>
          <span>Width</span>
          <span>{width}</span>
        </li>
        <li className={css.item}>
          <span>Height</span>
          <span>{height}</span>
        </li>
        <li className={css.item}>
          <span>Tank</span>
          <span>{tank}</span>
        </li>
        <li className={css.item}>
          <span>Consumption</span>
          <span>{consumption}</span>
        </li>
      </ul>
    </div>
  );
};
