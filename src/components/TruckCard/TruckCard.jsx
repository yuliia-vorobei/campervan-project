import Icon from "../Icon/Icon";
import css from "./TruckCard.module.css";

export const TruckCard = ({ items }) => {
  function splitWordsDescription(text, maxWords) {
    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  }

  function swapCountry(location) {
    const parts = location.split(",");
    if (parts.length === 2) {
      return `${parts[1]}, ${parts[0]}`;
    }
    return location;
  }

  return (
    <>
      {items.map(
        ({
          id,
          gallery,
          name,
          price,
          rating,
          location,
          description,
          reviews,
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
        }) => (
          <div key={id} className={css.container}>
            <img src={gallery[0]?.original} alt="Truck" className={css.image} />
            <div className={css.infoContainer}>
              <div className={css.titleContainer}>
                <h2 className={css.title}>{name}</h2>
                <div className={css.titleContainerItem}>
                  <p className={css.price}>€{price}</p>
                  <Icon
                    id="icon-Heart"
                    width={24}
                    height={24}
                    className={css.icon}
                  />
                </div>
              </div>
              <div className={css.reviewsContainer}>
                <div className={css.reviewsContainerItem}>
                  <Icon id="icon-Star" width={16} height={16} />
                  <p className={css.item}>
                    {rating}({reviews.length} Reviews)
                  </p>
                </div>
                <div className={css.locationContainerItem}>
                  <Icon id="icon-Map" width={16} height={16} />
                  <p className={css.item}>{swapCountry(location)}</p>
                </div>
              </div>
              <p className={css.truckDetails}>
                {splitWordsDescription(description, 10)}
              </p>
              <ul className={css.featuresContainer}>
                {transmission && (
                  <li className={css.features}>
                    <Icon id="icon-diagram" width={20} height={20} />
                    <p className={css.featuresDetails}>{transmission}</p>
                  </li>
                )}
                {engine && (
                  <li className={css.features}>
                    <Icon
                      id="icon-gas-stove"
                      width={20}
                      height={20}
                      className={css.icon}
                    />
                    <p className={css.featuresDetails}>{engine}</p>
                  </li>
                )}
                {kitchen && (
                  <li className={css.features}>
                    <Icon id="icon-cup-hot" width={20} height={20} />
                    <p className={css.featuresDetails}>Kitchen</p>
                  </li>
                )}
                {AC && (
                  <li className={css.features}>
                    <Icon id="icon-wind" width={20} height={20} />
                    <p className={css.featuresDetails}>AC</p>
                  </li>
                )}
                {water && (
                  <li className={css.features}>
                    <Icon
                      id="icon-water"
                      width={20}
                      height={20}
                      className={css.icon}
                    />
                    <p className={css.featuresDetails}>Water</p>
                  </li>
                )}
                {bathroom && (
                  <li className={css.features}>
                    <Icon id="icon-shower" width={20} height={20} />
                    <p className={css.featuresDetails}>Bathroom</p>
                  </li>
                )}
                {gas && (
                  <li className={css.features}>
                    <Icon id="icon-fuel-pump" width={20} height={20} />
                    <p className={css.featuresDetails}>Gas</p>
                  </li>
                )}
                {TV && (
                  <li className={css.features}>
                    <Icon id="icon-tv" width={20} height={20} />
                    <p className={css.featuresDetails}>Television</p>
                  </li>
                )}
                {radio && (
                  <li className={css.features}>
                    <Icon id="icon-radio" width={20} height={20} />
                    <p className={css.featuresDetails}>Radio</p>
                  </li>
                )}
                {refrigerator && (
                  <li className={css.features}>
                    <Icon id="icon-fridge" width={20} height={20} />
                    <p className={css.featuresDetails}>Refrigerator</p>
                  </li>
                )}
                {microwave && (
                  <li className={css.features}>
                    <Icon
                      id="icon-microwave"
                      width={20}
                      height={20}
                      className={css.icon}
                    />
                    <p className={css.featuresDetails}>Microwave</p>
                  </li>
                )}
              </ul>
              <button type="button" className={css.button}>
                Show more
              </button>
            </div>
          </div>
        )
      )}
    </>
  );
};
