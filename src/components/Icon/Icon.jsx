// import css from "./Icons.module.css";
import icons from "../../images/icons.svg";

const Icon = ({
  id,
  width,
  height,
  className = "",
  style,
  fill = "currentColor",
  stroke = "none",
}) => {
  return (
    <svg
      className={`${className}`}
      width={width}
      height={height}
      aria-hidden="true"
      style={style}
      fill={fill}
      stroke={stroke}
    >
      <use href={`${icons}#${id}`}></use>
    </svg>
  );
};
export default Icon;
