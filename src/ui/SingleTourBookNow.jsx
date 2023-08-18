import styles from "./SingleTourBookNow.module.scss";

function SingleTourBookNow() {
  return (
    <div className={styles.container}>
      <div className={styles["details-container"]}>
        <div className={styles["details-center"]}>
          <div className={styles.details}>
            <p className={styles.label}>Duration of</p>
            <p className={styles.text}>10 days</p>
          </div>
          <div className={styles.details}>
            <p className={styles.label}>Prices starting from</p>
            <p className={styles.text}>$2000</p>
          </div>
          <div className={styles.details}>
            <p className={styles.label}>Cities include</p>
            <p className={styles.text}>Tokyo, Kyoto, Osaka</p>
          </div>
          <div className={styles.details}>
            <p className={styles.label}>Type of tour</p>
            <p className={styles.text}>All around</p>
          </div>
          <div className={styles.details}>
            <p className={styles.label}>*Customizations available</p>
          </div>
        </div>
      </div>
      <div className={styles["about-container"]}>
        <p className={styles.about}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quidem
          quam harum animi, tenetur vel ullam similique culpa cumque fuga
          distinctio adipisci tempore inventore non? Excepturi omnis praesentium
          ratione laborum.
        </p>
        <button className={styles.button}>Book now</button>
      </div>
    </div>
  );
}

export default SingleTourBookNow;
