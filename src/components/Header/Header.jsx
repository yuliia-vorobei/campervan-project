import Logo from "../Logo/Logo";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.headerContainer}>
      <Logo />

      <nav className={css.navContainer}>
        <ul className={css.pagesContainer}>
          <li>
            <a className={css.page} href="./index.html">
              Home
            </a>
          </li>
          <li>
            <a className={css.page} href="">
              Catalog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
