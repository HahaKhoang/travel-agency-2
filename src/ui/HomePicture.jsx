import styles from "./HomePicture.module.scss";
import tokyo from "../../public/img/tokyo.jpg";

function HomePicture() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <img src={tokyo} />
          <div className={styles.textDetails}>
            <p className={styles.title}>Title</p>
            <p className={styles.details}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              ullam quam cumque excepturi{" "}
            </p>
          </div>
        </div>
        <div className={styles.text}>
          <img src={tokyo} />
          <div className={styles.textDetails}>
            <p className={styles.title}>Title</p>
            <p className={styles.details}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              ullam quam cumque excepturi{" "}
            </p>
          </div>
        </div>
        <div className={styles.text}>
          <img src={tokyo} />
          <div className={styles.textDetails}>
            <p className={styles.title}>Title</p>
            <p className={styles.details}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              ullam quam cumque excepturi{" "}
            </p>
          </div>
        </div>
        <div className={styles.text}>
          <img src={tokyo} />
          <div className={styles.textDetails}>
            <p className={styles.title}>Title</p>
            <p className={styles.details}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              ullam quam cumque excepturi{" "}
            </p>
          </div>
        </div>
      </div>
      <img src={tokyo} className={styles.pictureContainer}></img>
    </div>
  );
}

export default HomePicture;
