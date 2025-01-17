import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Logo from "../Logo/Logo";
import css from "./Header.module.css";

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.page, isActive && css.active);
  };

  return (
    <header className={css.headerContainer}>
      <Logo />
      <nav className={css.navContainer}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
