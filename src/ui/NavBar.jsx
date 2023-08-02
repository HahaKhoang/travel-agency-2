import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <div className={styles.navBar}>
      <nav className={styles.navContainer}>
        <ul>
          <NavLink to="/home">Logo</NavLink>
        </ul>
        <ul>
          <NavLink to="/about">About</NavLink>
        </ul>
        <ul>
          <NavLink to="/tours">Tours</NavLink>
        </ul>
        <ul>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
