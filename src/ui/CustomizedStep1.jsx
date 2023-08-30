import styles from "./CustomizedStep1.module.scss";
import jk8 from "../../public/img/jk8.jpg";
import bi6 from "../../public/img/bi6.jpg";

function CustomizedStep1() {
  return (
    <div className={styles.container}>
      <div className={styles["step-1"]}>
        <div className={styles["step-1-text-container"]}>
          <h2 className={styles.header}>Step 1</h2>
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
        <div className={styles["step-1-picture-container"]}>
          <img src={jk8} className={styles.picture}></img>
        </div>
      </div>
      <div className={styles["step-2"]}>
        <div className={styles["step-2-picture-container"]}>
          <img src={bi6} className={styles.picture}></img>
        </div>
        <div className={styles["step-2-text-container"]}>
          <h2 className={styles.header}>Step 2</h2>
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

export default CustomizedStep1;
