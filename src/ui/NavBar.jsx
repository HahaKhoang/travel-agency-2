import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { useEffect, useState } from "react";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";

function NavBar() {
  const [isScrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

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

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 650);
  };

  const scrolledNav =
    isScrolled && !isMobile
      ? `${styles.navBar} ${styles["navBar-scrolled"]}`
      : `${styles.navBar}`;

  const scrolledName =
    isScrolled && !isMobile
      ? `${styles.name} ${styles["name-scrolled"]}`
      : `${styles.name}`;

  const scrolledNavContainer =
    isScrolled && !isMobile
      ? `${styles.navContainer} ${styles["navContainer-scrolled"]}`
      : `${styles.navContainer}`;

  return (
    <div className={scrolledNav}>
      <NavLink to="/" className={scrolledName}>
        Tabi Tomodachi
      </NavLink>
      <nav
        className={scrolledNavContainer}
        style={
          hamburgerOpen ? { opacity: "1", transform: "translateX(0%)" } : {}
        }
      >
        <ul className={styles["nav-list"]}>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
              }
              onClick={() => setHamburgerOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tours"
              className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
              }
              onClick={() => setHamburgerOpen(false)}
            >
              Tours
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/surprise"
              className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
              }
              onClick={() => setHamburgerOpen(false)}
            >
              Surprise Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/customized-tour"
              className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
              }
              onClick={() => setHamburgerOpen(false)}
            >
              Customized tour
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
              }
              onClick={() => setHamburgerOpen(false)}
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
              }
              onClick={() => setHamburgerOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        className={styles.hamburger}
        onClick={() => {
          setHamburgerOpen((cur) => !cur);
        }}
      >
        {!hamburgerOpen && <RiMenuFill className={styles.icon} />}
        {hamburgerOpen && <RiCloseFill className={styles.icon} />}
      </button>
    </div>
  );
}

export default NavBar;

{
  /* <ul>
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
</ul> */
}
