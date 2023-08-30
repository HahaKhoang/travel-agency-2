import styles from "./CustomizedSection.module.scss";
import map from "../../public/img/website/map.jpg";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function CustomizedSection() {
  return (
    <section className={styles.container}>
      <div className={styles["left-container"]}>
        <h2 className={styles.header}>How it works</h2>
        <div className={styles.details}>
          <div className={styles["icon-box"]}>
            <RiNumber1 className={styles.icon} />
          </div>
          <p>Meet with Kathy 🙋🏻‍♀️</p>
        </div>
        <div className={styles.details}>
          <div className={styles["icon-box"]}>
            <RiNumber2 className={styles.icon} />
          </div>
          <p>Discuss specifics about your dream trip ✨</p>
        </div>
        <div className={styles.details}>
          <div className={styles["icon-box"]}>
            <RiNumber3 className={styles.icon} />
          </div>
          <p>Relax while Kathy figures out the rest 💆🏼‍♀️</p>
        </div>
        <NavLink to="/customized-tour" className={styles.button}>
          Book now
        </NavLink>
      </div>
      <div className={styles["right-container"]}>
        <img src={map} className={styles.picture} />
      </div>
    </section>
  );
}

export default CustomizedSection;
