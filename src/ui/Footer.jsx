import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        <a href="/">
          <h4 className={styles.logo}>Tabi tomodachi</h4>
        </a>
        <div className={styles.social}>
          <a
            href="https://www.tiktok.com/@tabitomodachi"
            target="_blank"
            className={styles["social-button"]}
          >
            Tiktok
          </a>
          <a
            href="https://www.instagram.com/tabitomodachi"
            target="_blank"
            className={styles["social-button"]}
          >
            Instagram
          </a>
        </div>
      </div>
      <div className={styles["right-container"]}>
        <div className={styles.column}>
          <p className={styles.header}>Continents</p>
          <NavLink to="/inspiration?destination=asia">Asia</NavLink>
          <NavLink to="/inspiration?destination=europe">Europe</NavLink>
          <NavLink to="/inspiration?destination=oceania">Oceania</NavLink>
          <NavLink to="/inspiration?destination=north-america">
            North America
          </NavLink>
          <NavLink to="/inspiration?destination=south-america">
            South America
          </NavLink>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Booking</p>
          <a href="/tours">All tours</a>
          <a href="/customized-tour">Customized tour</a>
          <a href="/surprise">Surprise tour</a>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Help</p>
          <a href="/faq">FAQ</a>
          <p>Reviews</p>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Get in touch</p>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
