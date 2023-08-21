import styles from "./SurpriseHow.module.scss";
import jk1 from "../../public/img/jk1.jpg";
import SurpriseStep1 from "./SurpriseStep1";
import SurpriseStep3 from "./SurpriseStep3";

function SurpriseHow() {
  return (
    <div className={styles.container}>
      <div className={styles.ready}>
        <div className={styles["text-container"]}>
          <h2 className={styles.header}>Ready to get started?</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            commodi dolorem{" "}
          </p>
        </div>
        <div className={styles["picture-container"]}>
          <img src={jk1} className={styles.picture} />
        </div>
      </div>
      <SurpriseStep1 />
      <SurpriseStep3 />
    </div>
  );
}

export default SurpriseHow;
