import styles from "./ItineraryDay3.module.scss";
import goldengai from "../../public/img/goldengai.jpg";

function ItineraryDay3() {
  return (
    <div className={styles.container}>
      <div className={styles["picture-container"]}>
        <img src={goldengai} className={styles.picture} />
      </div>
      <div className={styles["day-container"]}>
        <div className={styles.day}>
          <h3 className={styles["number-day"]}>Day 3</h3>
          <p className={styles.text}>Arrival in Japan | Welcome!</p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dolorum deleniti voluptates, eum, eaque cumque modi praesentium sed
            excepturi minima, enim obcaecati aut. Repellat repellendus,
            recusandae odio quo placeat amet!
          </p>
        </div>
        <div className={styles.day}>
          <h3 className={styles["number-day"]}>Day 4</h3>
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
          <h3 className={styles["number-day"]}>Day 5</h3>
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
    </div>
  );
}

export default ItineraryDay3;
