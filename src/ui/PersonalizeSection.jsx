import styles from "./PersonalizeSection.module.scss";
import map from "../../public/img/map.jpg";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

function PersonalizeSection() {
  return (
    <section className={styles.container}>
      <div className={styles["left-container"]}>
        <h2 className={styles.header}>How it works</h2>
        <div className={styles.details}>
          <div className={styles["icon-box"]}>
            <RiNumber1 className={styles.icon} />
          </div>
          <p>Meet with Kathy</p>
        </div>
        <div className={styles.details}>
          <div className={styles["icon-box"]}>
            <RiNumber2 className={styles.icon} />
          </div>
          <p>Discuss specifics about your dream trip</p>
        </div>
        <div className={styles.details}>
          <div className={styles["icon-box"]}>
            <RiNumber3 className={styles.icon} />
          </div>
          <p>Relax while Kathy figures out the rest</p>
        </div>
        <button className={styles.button}>Set up a consultation</button>
      </div>
      <div className={styles["right-container"]}>
        <img src={map} className={styles.picture} />
      </div>
    </section>
  );
}

export default PersonalizeSection;
