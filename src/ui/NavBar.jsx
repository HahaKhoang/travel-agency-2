import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { useState } from "react";

function NavBar() {
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY > 150) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const nav = colorChange
    ? `${styles.navBar} ${styles.color}`
    : `${styles.navBar}`;

  return (
    <div className={nav}>
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
