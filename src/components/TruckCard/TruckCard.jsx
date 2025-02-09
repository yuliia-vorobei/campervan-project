import clsx from "clsx";
import Icon from "../Icon/Icon";
import css from "./TruckCard.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { favoriteTrucks } from "../../redux/favorite/selectors.js";
import { addFavorites } from "../../redux/favorite/favoriteSlice.js";
import { setLoadMoreEnabled } from "../../redux/transportation/transportSlice.js";
import { useEffect } from "react";

export const TruckCard = ({ items }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favorites = useSelector(favoriteTrucks);

  const favoriteSet = new Set(favorites);

  useEffect(() => {
    const savedItem = localStorage.getItem("favoriteTruck");
    if (savedItem) {
      const parsedItems = JSON.parse(savedItem);
      parsedItems.forEach((id) => dispatch(addFavorites(id)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("favoriteTruck", JSON.stringify(favorites));
  }, [favorites]);

  function addFavorite(id) {
    dispatch(setLoadMoreEnabled(false));
    dispatch(addFavorites(id));
  }

  function splitWordsDescription(text, maxWords) {
    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  }

  function setPrice(price) {
    const priceNumber = price.toString();
    return `${priceNumber}.${"00"}`;
  }

  function swapCountry(location) {
    const parts = location.split(",");
    if (parts.length === 2) {
      return `${parts[1]}, ${parts[0]}`;
    }
    return location;
  }

  const handleNavigation = (id) => {
    navigate(`/catalog/${id}`);
  };

  return (
    <div>
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
        }) => {
          // const isFavorite = favorites.includes(id);
          const isFavorite = favoriteSet.has(id);

          return (
            <div key={id} className={css.container}>
              <img
                src={gallery[0]?.original}
                alt="Truck"
                className={css.image}
              />
              <div className={css.infoContainer}>
                <div className={css.titleContainer}>
                  <p className={css.title}>{name}</p>
                  <div className={css.titleContainerItem}>
                    <p className={css.price}>€{setPrice(price)}</p>

                    <button
                      onClick={() => addFavorite(id)}
                      className={css.iconButton}
                    >
                      <Icon
                        id="icon-Heart"
                        width={24}
                        height={24}
                        className={isFavorite ? css.iconSelected : css.icon}
                      />
                    </button>
                  </div>
                </div>
                <div className={css.gapContainer}>
                  <div className={css.reviewsContainer}>
                    <div className={css.reviewsContainerItem}>
                      <Icon
                        id="icon-Star"
                        width={16}
                        height={16}
                        style={{ fill: "#ffc531" }}
                      />
                      <p className={css.item}>
                        {rating} ({reviews.length} Reviews)
                      </p>
                    </div>
                    <div className={css.locationContainerItem}>
                      <Icon id="icon-map" width={16} height={16} />
                      <p className={css.item}>{swapCountry(location)}</p>
                    </div>
                  </div>
                  <p className={css.truckDetails}>
                    {splitWordsDescription(description, 10)}
                  </p>

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
                      .slice(0, 4)
                      .map(({ label, icon }, index) => (
                        <li
                          key={index}
                          className={clsx(css.features, {
                            [css.forceNewRow]: index === 3,
                          })}
                        >
                          <Icon
                            id={icon}
                            width={20}
                            height={20}
                            style={{
                              fill: [
                                "icon-water",
                                "icon-gas-stove",
                                "icon-microwave",
                              ].includes(icon)
                                ? "none"
                                : undefined,
                              stroke: [
                                "icon-water",
                                "icon-gas-stove",
                                "icon-microwave",
                              ].includes(icon)
                                ? "currentColor"
                                : undefined,
                            }}
                          />
                          <p className={css.featuresDetails}>{label}</p>
                        </li>
                      ))}
                  </ul>

                  <button
                    type="button"
                    className={css.button}
                    onClick={() => handleNavigation(id)}
                  >
                    Show more
                  </button>
                  {/* {loading && <Loader />} */}
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
