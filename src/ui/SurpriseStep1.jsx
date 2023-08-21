import styles from "./SurpriseStep1.module.scss";
import jk2 from "../../public/img/jk2.jpg";
import jk3 from "../../public/img/jk3.jpg";

function SurpriseStep1() {
  return (
    <div className={styles.container}>
      <div className={styles["step-1"]}>
        <div className={styles["step-1-picture-container"]}>
          <img src={jk2} className={styles.picture}></img>
        </div>
        <div className={styles["step-1-text-container"]}>
          <h2>Step 1</h2>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            suscipit
          </p>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing
          </p>
          <ul className={styles.text}>
            <li>Lorem ipsum dolor sit amet </li>
            <li>Lorem ipsum dolor sit amet </li>
            <li>Lorem ipsum dolor sit amet </li>
            <li>Lorem ipsum dolor sit amet </li>
            <li>Lorem ipsum dolor sit amet </li>
          </ul>
        </div>
      </div>
      <div className={styles["step-2"]}>
        <div className={styles["step-2-text-container"]}>
          <h2>Step 2</h2>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            suscipit
          </p>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing
          </p>
        </div>
        <div className={styles["step-2-picture-container"]}>
          <img src={jk3} className={styles.picture}></img>
        </div>
      </div>
    </div>
  );
}

export default SurpriseStep1;
