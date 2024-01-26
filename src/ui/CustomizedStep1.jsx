import styles from "./CustomizedStep1.module.scss";
import horseshoe from "../../public/img/inspiration/horseshoe.jpg";
import taipei from "../../public/img/inspiration/taipei.jpg";
import { NavLink } from "react-router-dom";

function CustomizedStep1() {
  return (
    <div className={styles.container}>
      <div className={styles["step-1"]}>
        <div className={styles["step-1-text-container"]}>
          <h2 className={styles.header}>Step 1</h2>
          <p className={styles.text}>
            Fill out a survey so we can get to know you better
          </p>
          <p className={styles.text}>
            The more details you provide, the more customizations we can provide
          </p>
          <NavLink to="booking" className={styles.button}>
            Go to Survey
          </NavLink>
        </div>
        <div className={styles["step-1-picture-container"]}>
          <img src={horseshoe} className={styles.picture}></img>
        </div>
      </div>
      <div className={styles["step-2"]}>
        <div className={styles["step-2-picture-container"]}>
          <img src={taipei} className={styles.picture}></img>
        </div>
        <div className={styles["step-2-text-container"]}>
          <h2 className={styles.header}>Step 2</h2>
          <p className={styles.text}>
            We will review your survey contents and set up a meeting to confirm
            the details
          </p>
          <p className={styles.text}>
            During the meeting, you can add any additional information
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomizedStep1;
