import styles from "./Banner2.module.scss";

function Banner2({ h1, text1, text2, svg }) {
  return (
    <div className={styles.container}>
      <div className={styles["text-container"]}>
        <h1 className={styles.header}>{h1}</h1>
        <h4 className={styles.text}>{text1}</h4>
        <h4 className={styles.text}>{text2}</h4>
      </div>
      <div className={styles["image-container"]}>
        <img src={svg} className={styles.picture} />
      </div>
    </div>
  );
}

export default Banner2;
