import styles from "./SurpriseHeader.module.scss";
import bike from "../../public/img/bike.jpg";

function MysteryHeader() {
  return (
    <div className={styles.container}>
      <div className={styles["picture-container"]}>
        <img src={bike} className={styles.picture} />
      </div>
      <div className={styles["text-container"]}>
        <h3 className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
          blanditiis natus! Voluptate, tenetur. Neque eaque id recusandae labore
          sunt hic odit doloremque iste commodi, assumenda nulla a sequi magnam
          voluptates!
        </h3>
      </div>
    </div>
  );
}

export default MysteryHeader;
