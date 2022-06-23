import { Link, NavLink } from "react-router-dom";
import Logo from "@assets/icons/logo.png";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={[styles.container, "d-flex"].join(" ")}>
          <div className={[styles.menu, "d-flex"].join(" ")}>
            <div className={styles.header__logo}>
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <nav className={styles.header__nav}>
              <ul className={[styles.header__nav__list, "d-flex"].join(" ")}>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/people">People</NavLink>
                </li>
                <li>
                  <NavLink to="/search">Search</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
