import { Link } from "react-router-dom";
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
          <Link to="/inspiration?destination=asia">Asia</Link>
          <Link to="/inspiration?destination=europe">Europe</Link>
          <Link to="/inspiration?destination=oceania">Oceania</Link>
          <Link to="/inspiration?destination=north-america">North America</Link>
          <Link to="/inspiration?destination=south-america">South America</Link>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Booking</p>
          <Link to="/all-tours">All tours</Link>
          <Link to="/customized-tour">Customized tour</Link>
          <Link to="/surprise-tour">Surprise tour</Link>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Help</p>
          <Link to="/faq">FAQ</Link>
          <Link to="/reviews">Reviews</Link>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Get in touch</p>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
