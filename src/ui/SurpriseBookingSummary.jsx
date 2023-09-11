import styles from "./SurpriseBookingSummary.module.scss";
import jk4 from "../../public/img/jk4.jpg";
import { useSelector } from "react-redux";

function SurpriseBookingSummary() {
  const duration = useSelector((state) => state.surprise.duration);
  const price = useSelector((state) => state.surprise.price);
  const quantity = useSelector((state) => state.surprise.quantity);
  const day = duration < 2 ? "day" : "days";
  const total = price * quantity;
  const durationField =
    duration === "flexible" ? "Surprise me" : `${duration} ${day}`;

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles["info-container"]}>
          <h3>Trip summary</h3>
          <div className={styles["picture-container"]}>
            <img src={jk4} className={styles.picture} />
          </div>
          <h3>Surprise tour</h3>
          <div className={styles["content-container"]}>
            <p className={styles.label}>Duration</p>
            <p className={styles.content}>{durationField}</p>
          </div>
          <div className={styles["content-container"]}>
            <p className={styles.label}>Price per person</p>
            <p className={styles.content}>${price}</p>
          </div>
          <div className={styles["content-container"]}>
            <p className={styles.label}>Number of people</p>
            <p className={styles.content}>{quantity}</p>
          </div>

          <div className={styles["total-container"]}>
            <p className={styles.label}>Cost breakdown</p>
            <div className={styles.extras}>
              <p>Tour x{quantity}</p>
              <p>${total}</p>
            </div>
          </div>
          <div className={styles.extras}>
            <p className={styles.total}>Total</p>
            <p className={styles.price}>${total}</p>
          </div>
          <p>
            *For tours $5000+, we will charge $5000 per person first and will
            invoice the rest of the costs before sending you the itinerary
          </p>
          <button className={styles.button}>Book</button>
        </div>
      </div>
    </div>
  );
}

export default SurpriseBookingSummary;
