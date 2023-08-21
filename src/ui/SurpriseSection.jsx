import styles from "./SurpriseSection.module.scss";
import roadtrip from "../../public/img/roadtrip.jpg";

function SurpriseSection() {
  return (
    <section className={styles.container}>
      <div className={styles["text-container"]}>
        <h2 className={styles.header}>Live your best life</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          laboriosam qui officia officiis sapiente est debitis voluptatem
          voluptas eveniet, minus et ut libero placeat magnam fugiat
          perferendis, enim dicta quaerat.
        </p>
        <button>Surprise me!</button>
      </div>
      <div className={styles["picture-container"]}>
        <img src={roadtrip} className={styles.picture} />
      </div>
    </section>
  );
}

export default SurpriseSection;
