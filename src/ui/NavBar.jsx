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
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
            }
          >
            About
          </NavLink>
        </ul>
        <ul>
          <NavLink
            to="/tours"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
            }
          >
            Tours
          </NavLink>
        </ul>
        <ul>
          <NavLink
            to="/inspiration"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
            }
          >
            Inspiration
          </NavLink>
        </ul>
        <ul>
          <NavLink
            to="/surprise"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
            }
          >
            Surprise Me
          </NavLink>
        </ul>
        <ul>
          <NavLink
            to="/customized-tour"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
            }
          >
            Customized tour
          </NavLink>
        </ul>
        <ul>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
            }
          >
            FAQ
          </NavLink>
        </ul>
        <ul>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
            }
          >
            Contact
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
