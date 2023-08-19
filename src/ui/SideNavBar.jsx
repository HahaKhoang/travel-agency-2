import { NavLink } from "react-router-dom";
import styles from "./SideNavBar.module.scss";

function SideNavBar() {
  return (
    <div className={styles["side-nav"]}>
      <nav className={styles["side-nav-container"]}>
        <div className={styles["left-nav"]}>
          <ul>
            <NavLink to="/" className={styles["side-name"]}>
              Tabi Tomodachi
            </NavLink>
          </ul>
        </div>
        <div className={styles["right-nav"]}>
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
        </div>
      </nav>
    </div>
  );
}

export default SideNavBar;
