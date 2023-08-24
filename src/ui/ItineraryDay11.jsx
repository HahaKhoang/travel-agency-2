import styles from "./ItineraryDay11.module.scss";

function ItineraryDay11({
  day11Title,
  day11Desc,
  day12Title,
  day12Desc,
  img6,
  img7,
}) {
  const container = day12Title
    ? `${styles.container}`
    : `${styles["container-small"]}`;

  return (
    <div className={container}>
      <div className={styles["container-top"]}>
        <div className={styles["picture-container-top"]}>
          <img src={img6} className={styles.picture} />
        </div>
        <div className={styles["day-11"]}>
          <div className={styles.day}>
            <h3 className={styles["number-day"]}>Day 11</h3>
            <p className={styles.text}>{day11Title}</p>
            <p className={styles.text}>{day11Desc}</p>
          </div>
        </div>
      </div>
      {day12Title && (
        <div className={styles["container-bottom"]}>
          <div className={styles["day-12"]}>
            <div className={styles.day}>
              <h3 className={styles["number-day"]}>Day 12</h3>
              <p className={styles.text}>{day12Title}</p>
              <p className={styles.text}>{day12Desc}</p>
            </div>
          </div>
          <div className={styles["picture-container-bottom"]}>
            <img src={img7} className={styles.picture} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ItineraryDay11;
