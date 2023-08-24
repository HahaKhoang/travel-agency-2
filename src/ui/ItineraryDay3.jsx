import styles from "./ItineraryDay3.module.scss";

function ItineraryDay3({
  day3Title,
  day3Desc,
  day4Title,
  day4Desc,
  day5Title,
  day5Desc,
  img2,
}) {
  return (
    <div className={styles.container}>
      <div className={styles["picture-container"]}>
        <img src={img2} className={styles.picture} />
      </div>
      <div className={styles["day-container"]}>
        <div className={styles.day}>
          <h3 className={styles["number-day"]}>Day 3</h3>
          <p className={styles.text}>{day3Title}</p>
          <p className={styles.text}>{day3Desc}</p>
        </div>
        <div className={styles.day}>
          <h3 className={styles["number-day"]}>Day 4</h3>
          <p className={styles.text}>{day4Title}</p>
          <p className={styles.text}>{day4Desc}</p>
        </div>
        <div className={styles.day}>
          <h3 className={styles["number-day"]}>Day 5</h3>
          <p className={styles.text}>{day5Title}</p>
          <p className={styles.text}>{day5Desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ItineraryDay3;
