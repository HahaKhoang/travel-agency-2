import styles from "./ItineraryDay6.module.scss";
import kiyomizu from "../../public/img/kiyomizu.jpg";
import dango from "../../public/img/dango.jpg";

function ItineraryDay6() {
  return (
    <div className={styles.container}>
      <div className={styles["container-top"]}>
        <div className={styles["day-6"]}>
          <div className={styles.day}>
            <h3 className={styles["number-day"]}>Day 6</h3>
            <p className={styles.text}>Arrival in Japan | Welcome!</p>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              dolorum deleniti voluptates, eum, eaque cumque modi praesentium
              sed excepturi minima, enim obcaecati aut. Repellat repellendus,
              recusandae odio quo placeat amet!
            </p>
          </div>
        </div>
        <div className={styles["picture-container-top"]}>
          <img src={kiyomizu} className={styles.picture} />
        </div>
      </div>
      <div className={styles["container-bottom"]}>
        <div className={styles["picture-container-bottom"]}>
          <img src={dango} className={styles.picture} />
        </div>
        <div className={styles["day-7"]}>
          <div className={styles.day}>
            <h3 className={styles["number-day"]}>Day 7</h3>
            <p className={styles.text}>Arrival in Japan | Welcome!</p>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              dolorum deleniti voluptates, eum, eaque cumque modi praesentium
              sed excepturi minima, enim obcaecati aut. Repellat repellendus,
              recusandae odio quo placeat amet!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItineraryDay6;
