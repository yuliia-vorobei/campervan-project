import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.headerContainer}>
      <Logo />
      <nav className={css.navContainer}>
        <NavLink to="/" className={css.page}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={css.page}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
