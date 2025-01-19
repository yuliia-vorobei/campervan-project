import { useSelector } from "react-redux";
import { selectOneTruck } from "../../redux/transportation/selectors";
import { useParams } from "react-router-dom";
import Icon from "../Icon/Icon";
import css from "./Reviews.module.css";

export const Reviews = () => {
  const { id } = useParams();
  const transportation = useSelector((state) => selectOneTruck(state, id));
  const { reviews } = transportation;

  return (
    <>
      <ul className={css.container}>
        {reviews.map(({ reviewer_name, comment, reviewer_rating }) => (
          <li key={reviewer_name}>
            <div className={css.containerList}>
              <span className={css.backgroundPicture}>
                {reviewer_name.charAt(0)}
              </span>
              <div className={css.containerItem}>
                <h4 className={css.title}>{reviewer_name}</h4>
                <div className={css.stars}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon
                      key={index}
                      id="icon-Star"
                      width={16}
                      height={16}
                      className={
                        index < reviewer_rating ? css.filledStar : css.emptyStar
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className={css.comment}>{comment}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
