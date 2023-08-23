import styles from "./ItineraryDay1.module.scss";

function ItineraryDay1({ img1, day1Title, day1Desc, day2Title, day2Desc }) {
  return (
    <div className={styles.container}>
      <div className={styles["day-container"]}>
        <div className={styles.day}>
          <h3 className={styles["number-day"]}>Day 1</h3>
          <p className={styles.text}>{day1Title}</p>
          <p className={styles.text}>{day1Desc}</p>
        </div>
        <div className={styles.day}>
          <h3 className={styles["number-day"]}>Day 2</h3>
          <p className={styles.text}>{day2Title}</p>
          <p className={styles.text}>{day2Desc}</p>
        </div>
      </div>
      <div className={styles["picture-container"]}>
        <img src={img1} className={styles.picture} />
      </div>
    </div>
  );
}

export default ItineraryDay1;
