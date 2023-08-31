import styles from "./Banner2.module.scss";
import tour from "../../public/img/undraw/tours.svg";

function Banner2() {
  return (
    <div className={styles.container}>
      <div className={styles["text-container"]}>
        <h1>Find the perfect tour for you</h1>
        <h4>Browse through our selection of tours</h4>
        <h4>
          If you can't find one to your liking, we also do customized tours!
        </h4>
      </div>
      <div className={styles["image-container"]}>
        <img src={tour} className={styles.picture} />
      </div>
    </div>
  );
}

export default Banner2;
