import styles from "./CustomizedStep1.module.scss";
import jk8 from "../../public/img/jk8.jpg";

function CustomizedStep1() {
  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        <h2>Step 1</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium,
          eveniet iste ab asperiores unde, tempora, dolorem animi doloribus
          maiores aspernatur maxime expedita dolore eius harum laboriosam
          necessitatibus cumque ipsam. Incidunt.
        </p>
        <button>Fill out survey</button>
      </div>
      <div className={styles["right-container"]}>
        <img src={jk8} className={styles.picture} />
      </div>
    </div>
  );
}

export default CustomizedStep1;
