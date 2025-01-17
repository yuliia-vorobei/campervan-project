import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectOneTruck } from "../../redux/transportation/selectors";
import Icon from "../Icon/Icon";
import css from "./Features.module.css";

export const Features = () => {
  const { id } = useParams();
  const transportation = useSelector((state) => selectOneTruck(state, id));
  const {
    transmission,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    water,
    engine,
    gas,
  } = transportation;

  return (
    <ul className={css.featuresContainer}>
      {[
        {
          condition: transmission,
          label: "Transmission",
          icon: "icon-diagram",
        },
        {
          condition: engine,
          label: "Engine",
          icon: "icon-gas-stove",
        },
        {
          condition: kitchen,
          label: "Kitchen",
          icon: "icon-cup-hot",
        },
        { condition: AC, label: "AC", icon: "icon-wind" },
        {
          condition: water,
          label: "Water",
          icon: "icon-water",
        },
        {
          condition: bathroom,
          label: "Bathroom",
          icon: "icon-shower",
        },
        {
          condition: gas,
          label: "Gas",
          icon: "icon-fuel-pump",
        },
        { condition: TV, label: "Television", icon: "icon-tv" },
        {
          condition: radio,
          label: "Radio",
          icon: "icon-radio",
        },
        {
          condition: refrigerator,
          label: "Refrigerator",
          icon: "icon-fridge",
        },
        {
          condition: microwave,
          label: "Microwave",
          icon: "icon-microwave",
        },
      ]
        .filter(({ condition }) => condition)
        .map(({ label, icon }, index) => (
          <li key={index} className={css.features}>
            <Icon id={icon} width={20} height={20} />
            <p className={css.featuresDetails}>{label}</p>
          </li>
        ))}
    </ul>
  );
};
