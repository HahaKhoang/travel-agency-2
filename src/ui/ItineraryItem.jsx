import styles from "./ItineraryItem.module.scss";

function ItineraryItem() {
  return (
    <div className={styles.container}>
      <h3>Itinerary</h3>
      <div className={styles.day}>
        <div className={styles.date}>
          <p>Day</p>
          <p>1</p>
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </p>
      </div>
      <div className={styles.day}>
        <div className={styles.date}>
          <p>Day</p>
          <p>1</p>
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </p>
      </div>
      <div className={styles.day}>
        <div className={styles.date}>
          <p>Day</p>
          <p>1</p>
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </p>
      </div>
      <div className={styles.day}>
        <div className={styles.date}>
          <p>Day</p>
          <p>1</p>
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </p>
      </div>
      <div className={styles.day}>
        <div className={styles.date}>
          <p>Day</p>
          <p>10</p>
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </p>
      </div>
      <div className={styles.day}>
        <div className={styles.date}>
          <p>Day</p>
          <p>1</p>
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </p>
      </div>
    </div>
  );
}

export default ItineraryItem;
