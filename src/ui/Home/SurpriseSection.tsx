import styles from "./SurpriseSection.module.scss";
import roadtrip from "../../assets/img/website/roadtrip.jpg";
import { NavLink } from "react-router-dom";

function SurpriseSection() {
  return (
    <section className={styles.container}>
      <div className={styles["left-container"]}>
        <div className={styles["text-container"]}>
          <h2 className={styles.header}>Live your best life</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            laboriosam qui officia officiis sapiente est debitis voluptatem
            voluptas eveniet, minus et ut libero placeat magnam fugiat
            perferendis, enim dicta quaerat.
          </p>
          <NavLink to="surprise-tour" className={styles.button}>
            Surprise me!
          </NavLink>
        </div>
      </div>
      <div className={styles["picture-container"]}>
        <img
          src={roadtrip}
          className={styles.picture}
          alt="Woman sticking her head and arm out of a car during a road trip"
        />
      </div>
    </section>
  );
}

export default SurpriseSection;
