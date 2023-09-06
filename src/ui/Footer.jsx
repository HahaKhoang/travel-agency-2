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
          <p>Asia</p>
          <p>Europe</p>
          <p>Oceania</p>
          <p>North America</p>
          <p>South America</p>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Booking</p>
          <p>All tours</p>
          <p>Customized tour</p>
          <p>Surprise tour</p>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Help</p>
          <p>FAQ</p>
          <p>Reviews</p>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Get in touch</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
