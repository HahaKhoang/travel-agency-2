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
          <NavLink to="/home" className={styles.link}>
            Home
          </NavLink>
        </ul>
        <ul>
          <NavLink to="/about" className={styles.link}>
            About
          </NavLink>
        </ul>
        <ul>
          <NavLink to="/tours" className={styles.link}>
            Tours
          </NavLink>
        </ul>
        <ul>
          <NavLink to="/inspiration" className={styles.link}>
            Inspiration
          </NavLink>
        </ul>
        <ul>
          <NavLink to="/faq" className={styles.link}>
            FAQ
          </NavLink>
        </ul>
        <ul>
          <NavLink to="/contact" className={styles.link}>
            Contact
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
