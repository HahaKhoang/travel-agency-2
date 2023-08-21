import styles from "./SurpriseHeader.module.scss";
import explore from "../../public/img/explore.jpg";

function MysteryHeader() {
  return (
    <div className={styles.container}>
      <div className={styles["picture-container"]}>
        <img src={explore} className={styles.picture} />
      </div>
      <div className={styles["text-container"]}>
        <h3 className={styles.header}>
          Lorem ipsum dolor sit amet, consectetur
        </h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          autem in quidem maiores ad delectus, ratione labore officia quos
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          autem in quidem maiores ad delectus, ratione labore officia quos
        </p>
      </div>
    </div>
  );
}

export default MysteryHeader;
