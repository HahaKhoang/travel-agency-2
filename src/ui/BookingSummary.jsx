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
          <div className={styles["content-container"]}>
            <p className={styles.label}>Duration</p>
            <p className={styles.content}>10 days</p>
          </div>
          <div className={styles["content-container"]}>
            <p className={styles.label}>Price per person</p>
            <p className={styles.content}>$50</p>
          </div>
          <div className={styles["content-container"]}>
            <p className={styles.label}>Number of people</p>
            <p className={styles.content}>3</p>
          </div>
          <div className={styles["content-container"]}>
            <p className={styles.label}>Number of cities</p>
            <p className={styles.content}>3</p>
          </div>
          <div className={styles["extras-container"]}>
            <p className={styles.label}>Extras</p>
            <div className={styles.extras}>
              <p>Accommodation booking service</p>
              <p>$30</p>
            </div>
            <div className={styles.extras}>
              <p>Flight booking service</p>
              <p>$90</p>
            </div>
          </div>
          <div className={styles["total-container"]}>
            <p className={styles.label}>Cost breakdown</p>
            <div className={styles.extras}>
              <p>Tour x2</p>
              <p>$100</p>
            </div>
            <div className={styles.extras}>
              <p>Accommodation booking service</p>
              <p>$30</p>
            </div>
            <div className={styles.extras}>
              <p>Flight booking service</p>
              <p>$90</p>
            </div>
          </div>
          <div className={styles.extras}>
            <p className={styles.total}>Total</p>
            <p className={styles.price}>$300</p>
          </div>
          <p>
            *Price does not include flight, accommodation, or additional costs.
            The total cost only covers the itinerary and any additional
            features.
          </p>
          <button className={styles.button}>Book</button>
        </div>
      </div>
    </div>
  );
}

export default BookingSummary;

{
  /* <p className={styles.text}>Duration: 10 days</p>
          <p className={styles.text}>Price: $50</p>
          <p className={styles.text}>Number of people: 2</p>
          <p className={styles.text}>
            Cities: Kyoto, Tokyo, Nagoya, Osaka, Fukuoka
          </p>
          <p className={styles.text}>Extras: none</p>
          <p className={styles.text}>
            Total:<span className={styles.price}>$300</span>{" "}
          </p> */
}
