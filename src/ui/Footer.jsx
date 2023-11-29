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
          <Link to="/inspiration?destination=asia" className={styles.link}>
            Asia
          </Link>
          <Link to="/inspiration?destination=europe" className={styles.link}>
            Europe
          </Link>
          <Link to="/inspiration?destination=oceania" className={styles.link}>
            Oceania
          </Link>
          <Link
            to="/inspiration?destination=north-america"
            className={styles.link}
          >
            North America
          </Link>
          <Link
            to="/inspiration?destination=south-america"
            className={styles.link}
          >
            South America
          </Link>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Booking</p>
          <Link to="/all-tours" className={styles.link}>
            All tours
          </Link>
          <Link to="/customized-tour" className={styles.link}>
            Customized tour
          </Link>
          <Link to="/surprise-tour" className={styles.link}>
            Surprise tour
          </Link>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Help</p>
          <Link to="/faq" className={styles.link}>
            FAQ
          </Link>
          <Link to="/reviews" className={styles.link}>
            Reviews
          </Link>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Get in touch</p>
          <Link to="/contact" className={styles.link}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
