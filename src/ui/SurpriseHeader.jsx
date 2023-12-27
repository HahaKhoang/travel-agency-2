import styles from "./SurpriseHeader.module.scss";
import explore from "../../public/img/website/explore.jpg";

function MysteryHeader() {
  return (
    <div className={styles.container}>
      <div className={styles["picture-container"]}>
        <img src={explore} className={styles.picture} />
      </div>
      <div className={styles["right-container"]}>
        <div className={styles["text-container"]}>
          <p className={styles.header}>
            It's not about the destination, it's about the journey
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis autem in quidem maiores ad delectus, ratione
          </p>
        </div>
      </div>
    </div>
  );
}

export default MysteryHeader;
