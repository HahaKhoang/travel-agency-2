import styles from "./ItineraryDay13.module.scss";

function ItineraryDay13({
  day13Title,
  day13Desc,
  day14Title,
  day14Desc,
  day15Title,
  day15Desc,
  img8,
}) {
  return (
    <div className={styles.container}>
      {!day15Title ? (
        <div className={styles["picture-container-small"]}>
          <img src={img8} className={styles.picture} />
        </div>
      ) : (
        <div className={styles["picture-container"]}>
          <img src={img8} className={styles.picture} />
        </div>
      )}
      <div className={styles["day-container"]}>
        <div className={styles.day}>
          <h3 className={styles["number-day"]}>Day 13</h3>
          <p className={styles.text}>{day13Title}</p>
          <p className={styles.text}>{day13Desc}</p>
        </div>
        {day14Title && (
          <div className={styles.day}>
            <h3 className={styles["number-day"]}>Day 14</h3>
            <p className={styles.text}>{day14Title}</p>
            <p className={styles.text}>{day14Desc}</p>
          </div>
        )}
        {day15Title && (
          <div className={styles.day}>
            <h3 className={styles["number-day"]}>Day 15</h3>
            <p className={styles.text}>{day15Title}</p>
            <p className={styles.text}>{day15Desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItineraryDay13;
