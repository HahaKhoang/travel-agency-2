import styles from "./CustomizedSteps.module.scss";
import horseshoe from "../assets/img/inspiration/horseshoe.jpg";
import taipei from "../assets/img/inspiration/taipei.jpg";
import machuPichu from "../assets/img/inspiration/machuPichu.jpg";
import capetown from "../assets/img/inspiration/capetown.jpg";
import tori from "../assets/img/inspiration/tori.jpg";
import { NavLink } from "react-router-dom";

function CustomizedSteps() {
  return (
    <>
      <div className={styles["container-1-2"]}>
        <div className={styles["step-1"]}>
          <div className={styles["step-1-text-container"]}>
            <h2 className={styles.header}>Step 1</h2>
            <p className={styles.text}>
              Fill out a survey so we can get to know you better
            </p>
            <p className={styles.text}>
              The more details you provide, the more customizations we can
              provide
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
              We will review your survey contents and set up a meeting to
              confirm the details
            </p>
            <p className={styles.text}>
              During the meeting, you can add any additional information
            </p>
          </div>
        </div>
      </div>

      <div className={styles["container-3-5"]}>
        <div className={styles["step-3"]}>
          <div className={styles["step-3-text-container"]}>
            <h2 className={styles.header}>Step 3</h2>
            <p className={styles.text}>
              We will have one more final meeting where I will present the
              customized tour I have designed for you
            </p>
            <p className={styles.text}>
              Any final changes will be made at this point
            </p>
          </div>
          <div className={styles["step-3-picture-container"]}>
            <img src={machuPichu} className={styles.picture} />
          </div>
        </div>
        <div className={styles["step-4"]}>
          <div className={styles["step-4-picture-container"]}>
            <img src={capetown} className={styles.picture} />
          </div>
          <div className={styles["step-4-text-container"]}>
            <h2 className={styles.header}>Step 4</h2>
            <p className={styles.text}>Now you just wait until your trip!</p>
            <p className={styles.text}>
              We will be here for any necessary support needed before your trip
            </p>
          </div>
        </div>
        <div className={styles["step-5"]}>
          <div className={styles["step-5-text-container"]}>
            <h2 className={styles.header}>Step 5</h2>
            <p className={styles.text}>Pack your bags and grab your passport</p>
            <p className={styles.text}>
              Time to make some unforgettable memories!
            </p>
          </div>
          <div className={styles["step-5-picture-container"]}>
            <img src={tori} className={styles.picture} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomizedSteps;
