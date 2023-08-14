import styles from "./PersonalizeSection.module.scss";
import svalbard from "../../public/img/svalbard.jpg";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

function PersonalizeSection() {
  return (
    <section className={styles.container}>
      <div className={styles["left-container"]}>
        <p className={styles.discover}>How it works</p>
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
        <img src={svalbard} className={styles.picture} />
      </div>
    </section>
  );
}

export default PersonalizeSection;
