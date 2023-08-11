import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.name}>Travel name</div>
      <nav className={styles.navContainer}>
        <ul>
          <NavLink to="/home">About</NavLink>
        </ul>
        <ul>
          <NavLink to="/about">Tours</NavLink>
        </ul>
        <ul>
          <NavLink to="/tours">Inspiration</NavLink>
        </ul>
        <ul>
          <NavLink to="/tours">FAQ</NavLink>
        </ul>
        <ul>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
