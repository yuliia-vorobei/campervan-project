// import css from "./Icons.module.css";
import icons from "../../images/icons.svg";

const Icon = ({ id, width, height, className = "", style }) => {
  return (
    <svg
      className={`${className}`}
      width={width}
      height={height}
      aria-hidden="true"
      style={style}
    >
      <use href={`${icons}#${id}`}></use>
    </svg>
  );
};
export default Icon;
