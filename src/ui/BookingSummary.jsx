import styles from "./BookingSummary.module.scss";
import jk2 from "../../public/img/jk2.jpg";

function BookingSummary() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles["info-container"]}>
          <h3>Trip summary</h3>
          <div className={styles["picture-container"]}>
            <img src={jk2} className={styles.picture} />
          </div>
          <h3>Essential Japan</h3>
          <p className={styles.text}>Duration: 10 days</p>
          <p className={styles.text}>Price: $50</p>
          <p className={styles.text}>Number of people: 2</p>
          <p className={styles.text}>
            Cities: Kyoto, Tokyo, Nagoya, Osaka, Fukuoka
          </p>
          <p className={styles.text}>Extras: none</p>
          <p className={styles.text}>
            Total:<span className={styles.price}>$300</span>{" "}
          </p>
          <p>
            *Price does not include flight, accommodation, or additional costs.
            The total cost only covers the itinerary and any additional
            features.
          </p>
          {/* <button className={styles.button}>Book</button> */}
        </div>
      </div>
    </div>
  );
}

export default BookingSummary;
