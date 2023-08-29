import styles from "./RotatingWords.module.scss";

function RotatingWords() {
  return (
    <div className={styles.container}>
      <div className={styles["first-part"]}>
        <p>We're here to help you</p>
        <div className={styles.words}>
          <span>travel</span>
          <span>explore</span>
          <span>relax</span>
          <span>play</span>
          <span>eat</span>
          <span>drink</span>
          <span>party</span>
          <span>shop</span>
        </div>
        <p className={styles["second-part"]}>the way you want</p>
      </div>
    </div>
  );
}

export default RotatingWords;
