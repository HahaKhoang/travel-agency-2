import styles from "./SurpriseStep3.module.scss";
import trolley from "../../public/img/website/trolley.jpg";
import kayak from "../../public/img/website/kayak.jpg";
import adventure from "../../public/img/website/adventure.jpg";

function SurpriseStep3() {
  return (
    <div className={styles.container}>
      <div className={styles["step-3"]}>
        <div className={styles["step-3-picture-container"]}>
          <img src={trolley} className={styles.picture} />
        </div>
        <div className={styles["step-3-text-container"]}>
          <h2 className={styles.header}>Step 3</h2>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            suscipit
          </p>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing
          </p>
        </div>
      </div>
      <div className={styles["step-4"]}>
        <div className={styles["step-4-text-container"]}>
          <h2 className={styles.header}>Step 4</h2>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            suscipit
          </p>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing
          </p>
        </div>
        <div className={styles["step-4-picture-container"]}>
          <img src={kayak} className={styles.picture} />
        </div>
      </div>
      <div className={styles["step-5"]}>
        <div className={styles["step-5-picture-container"]}>
          <img src={adventure} className={styles.picture} />
        </div>
        <div className={styles["step-5-text-container"]}>
          <h2 className={styles.header}>Step 5</h2>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            suscipit
          </p>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing
          </p>
        </div>
      </div>
    </div>
  );
}

export default SurpriseStep3;
