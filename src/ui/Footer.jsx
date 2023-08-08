import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        <p className={styles.header}> You can also find me on</p>
        <div className={styles.social}>
          <a className={styles["social-button"]}>Tiktok</a>
          <a className={styles["social-button"]}>Instagram</a>
          <a className={styles["social-button"]}>Twitter</a>
        </div>
      </div>
      <div className={styles["right-container"]}>
        <div className={styles.column}>
          <p className={styles.header}>Menu</p>
          <p>Services</p>
          <p>Terms of use</p>
          <p>Privacy policy</p>
          <p>How it works</p>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Get help</p>
          <p>Support</p>
          <p>Quick chat</p>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Support</p>
          <p>FAQ</p>
          <p>Policy</p>
          <p>Business</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
