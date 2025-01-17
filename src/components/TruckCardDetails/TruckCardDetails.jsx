import { useSelector } from "react-redux";
import { selectOneTruck } from "../../redux/transportation/selectors";
import css from "./TruckCardDetails.module.css";
import Icon from "../Icon/Icon";
import { useParams } from "react-router-dom";

export const TruckCardDetails = () => {
  const { id } = useParams();
  const transportation = useSelector((state) => selectOneTruck(state, id));

  function swapCountry(location) {
    const parts = location.split(",");
    if (parts.length === 2) {
      return `${parts[1]}, ${parts[0]}`;
    }
    return location;
  }

  if (!transportation) {
    return;
  }

  const { name, price, rating, location, description, gallery, reviews } =
    transportation;

  return (
    <div>
      <p className={css.title}>{name}</p>
      <div className={css.detailsContainer}>
        <div className={css.reviewsContainerItem}>
          <Icon id="icon-Star" width={16} height={16} />
          {rating} ({reviews.length} Reviews)
        </div>
        <div className={css.locationContainerItem}>
          <Icon id="icon-Map" width={16} height={16} />
          <p className={css.item}>{swapCountry(location)}</p>
        </div>
      </div>
      <p className={css.price}>€{price}</p>
      <div className={css.imageContainer}>
        {gallery.map(({ original, thumb }) => (
          <img key={thumb} src={original} alt="Truck" className={css.image} />
        ))}
      </div>
      <p className={css.truckDetails}>{description}</p>
    </div>
  );
};
