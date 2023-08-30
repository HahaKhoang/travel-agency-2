import styles from "./CustomizedStep3.module.scss";
import jk4 from "../../public/img/jk4.jpg";
import bi10 from "../../public/img/bi10.jpg";
import jk6 from "../../public/img/jk6.jpg";

function CustomizedStep3() {
  return (
    <div className={styles.container}>
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
          <img src={jk4} className={styles.picture} />
        </div>
      </div>
      <div className={styles["step-4"]}>
        <div className={styles["step-4-picture-container"]}>
          <img src={bi10} className={styles.picture} />
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
          <img src={jk6} className={styles.picture} />
        </div>
      </div>
    </div>
  );
}

export default CustomizedStep3;
