import styles from "./ItineraryDay1.module.scss";
import kyoto from "../../public/img/kyoto.jpg";

function ItineraryDay1() {
  return (
    <div className={styles.container}>
      <div className={styles["day-container"]}>
        <div className={styles.day}>
          <h3 className={styles["number-day"]}>Day 1</h3>
          <p className={styles.text}>Arrival in Japan | Welcome!</p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dolorum deleniti voluptates, eum, eaque cumque modi praesentium sed
            excepturi minima, enim obcaecati aut. Repellat repellendus,
            recusandae odio quo placeat amet!
          </p>
        </div>
        <div className={styles.day}>
          <h3 className={styles["number-day"]}>Day 2</h3>
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
        <img src={kyoto} className={styles.picture} />
      </div>
    </div>
  );
}

export default ItineraryDay1;
