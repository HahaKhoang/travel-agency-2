import styles from "./RotatingWords.module.scss";

function RotatingWords() {
  return (
    <div className={styles.container}>
      <div className={styles["first-part"]}>
        <p>We're here to help you</p>
        <div className={styles.words}>
          <span className={styles.word}>travel</span>
          <span className={styles.word}>explore</span>
          <span className={styles.word}>relax</span>
          <span className={styles.word}>play</span>
          <span className={styles.word}>eat</span>
          <span className={styles.word}>drink</span>
          <span className={styles.word}>party</span>
          <span className={styles.word}>shop</span>
        </div>
        <p className={styles["second-part"]}>the way you want</p>
      </div>
    </div>
  );
}

export default RotatingWords;
