import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { useEffect, useState } from "react";

function NavBar() {
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 2) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const scrolledNav = isScrolled
    ? `${styles.navBar} ${styles["navBar-scrolled"]}`
    : `${styles.navBar}`;

  const scrolledName = isScrolled
    ? `${styles.name} ${styles["name-scrolled"]}`
    : `${styles.name}`;

  const scrolledNavContainer = isScrolled
    ? `${styles.navContainer} ${styles["navContainer-scrolled"]}`
    : `${styles.navContainer}`;

  return (
    <div className={scrolledNav}>
      <NavLink to="/" className={scrolledName}>
        Tabi Tomodachi
      </NavLink>
      <nav className={scrolledNavContainer}>
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
            Book now
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
