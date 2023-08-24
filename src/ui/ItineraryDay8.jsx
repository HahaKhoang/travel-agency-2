import styles from "./ItineraryDay8.module.scss";

function ItineraryDay8({
  day8Title,
  day8Desc,
  day9Title,
  day9Desc,
  day10Title,
  day10Desc,
  img5,
}) {
  return (
    <div className={styles.container}>
      <div className={styles["day-container"]}>
        <div className={styles.day}>
          <h3 className={styles["number-day"]}>Day 8</h3>
          <p className={styles.text}>{day8Title}</p>
          <p className={styles.text}>{day8Desc}</p>
        </div>
        {day9Title && (
          <div className={styles.day}>
            <h3 className={styles["number-day"]}>Day 9</h3>
            <p className={styles.text}>{day9Title}</p>
            <p className={styles.text}>{day9Desc}</p>
          </div>
        )}
        {day10Title && (
          <div className={styles.day}>
            <h3 className={styles["number-day"]}>Day 10</h3>
            <p className={styles.text}>{day10Title}</p>
            <p className={styles.text}>{day10Desc}</p>
          </div>
        )}
      </div>
      {!day10Title ? (
        <div className={styles["picture-container-small"]}>
          <img src={img5} className={styles.picture} />
        </div>
      ) : (
        <div className={styles["picture-container"]}>
          <img src={img5} className={styles.picture} />
        </div>
      )}
    </div>
  );
}

export default ItineraryDay8;
