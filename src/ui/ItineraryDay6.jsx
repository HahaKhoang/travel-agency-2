import styles from "./ItineraryDay6.module.scss";

function ItineraryDay6({
  img3,
  img4,
  day6Title,
  day6Desc,
  day7Title,
  day7Desc,
}) {
  const container = day7Title
    ? `${styles.container}`
    : `${styles["container-small"]}`;

  return (
    <div className={container}>
      <div className={styles["container-top"]}>
        <div className={styles["day-6"]}>
          <div className={styles.day}>
            <h3 className={styles["number-day"]}>Day 6</h3>
            <p className={styles.text}>{day6Title}</p>
            <p className={styles.text}>{day6Desc}</p>
          </div>
        </div>
        <div className={styles["picture-container-top"]}>
          <img src={img3} className={styles.picture} />
        </div>
      </div>
      {day7Title && (
        <div className={styles["container-bottom"]}>
          <div className={styles["picture-container-bottom"]}>
            <img src={img4} className={styles.picture} />
          </div>
          <div className={styles["day-7"]}>
            <div className={styles.day}>
              <h3 className={styles["number-day"]}>Day 7</h3>
              <p className={styles.text}>{day7Title}</p>
              <p className={styles.text}>{day7Desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItineraryDay6;
