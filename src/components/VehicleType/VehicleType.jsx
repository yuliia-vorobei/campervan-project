import Icon from "../Icon/Icon";
import css from "./VehicleType.module.css";

export const VehicleType = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Vehicle type</h2>
      <div className={css.iconsList}>
        <div className={css.iconsItem}>
          <Icon id="icon-bi_grid-1x2" width={32} height={32} />
          <p className={css.iconTitle}>Van</p>
        </div>
        <div className={css.iconsItem}>
          <Icon id="icon-bi_grid" width={32} height={32} />
          <p className={css.iconTitle}>Fully Integrated</p>
        </div>
        <div className={css.iconsItem}>
          <Icon id="icon-bi_grid-3x3-gap" width={32} height={32} />
          <p className={css.iconTitle}>Alcove</p>
        </div>
      </div>
    </div>
  );
};
