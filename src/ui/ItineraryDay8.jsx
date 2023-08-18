import styles from "./ItineraryDay8.module.scss";
import wagashi from "../../public/img/wagashi.jpg";

function ItineraryDay8() {
  return (
    <div className={styles.container}>
      <div className={styles["day-container"]}>
        <div className={styles.day}>
          <h3 className={styles["number-day"]}>Day 8</h3>
          <p className={styles.text}>Arrival in Japan | Welcome!</p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dolorum deleniti voluptates, eum, eaque cumque modi praesentium sed
            excepturi minima, enim obcaecati aut. Repellat repellendus,
            recusandae odio quo placeat amet!
          </p>
        </div>
        <div className={styles.day}>
          <h3 className={styles["number-day"]}>Day 9</h3>
          <p className={styles.text}>Lorem ipsum dolor sit amet</p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dolorum deleniti voluptates, eum, eaque cumque modi praesentium sed
            excepturi minima, enim obcaecati aut. Repellat repellendus,
            recusandae odio quo placeat amet! Repellat repellendus, recusandae
            odio quo placeat amet!
          </p>
        </div>
        <div className={styles.day}>
          <h3 className={styles["number-day"]}>Day 10</h3>
          <p className={styles.text}>Lorem ipsum dolor sit amet</p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dolorum deleniti voluptates, eum, eaque cumque modi praesentium sed
            excepturi minima, enim obcaecati aut. Repellat repellendus,
            recusandae odio quo placeat amet! Repellat repellendus, recusandae
            odio quo placeat amet!
          </p>
        </div>
      </div>
      <div className={styles["picture-container"]}>
        <img src={wagashi} className={styles.picture} />
      </div>
    </div>
  );
}

export default ItineraryDay8;
