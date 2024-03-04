import styles from "./SurpriseBookingSummary.module.scss";
import { useAppSelector } from "../../store/hooks";

import night from "../../assets/img/website/night.jpg";

function SurpriseBookingSummary() {
  const { duration, quantity, price } = useAppSelector(
    (state) => state.surprise
  );
  const day = duration < 2 ? "day" : "days";
  const durationField = duration === 0 ? "I'm flexible" : `${duration} ${day}`;

  const tourTotal = price * quantity;
  const deposit = Math.floor(tourTotal / 3);
  const finalPayment = Math.ceil(tourTotal - deposit);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles["picture-container"]}>
          <img src={night} className={styles.picture} />
        </div>

        <h3>Surprise trip</h3>
        <div className={styles["details-container"]}>
          <div className={styles.details}>
            <p>Price</p>
            <p className={styles.content}>${price}</p>
          </div>
          <div className={styles.details}>
            <p>Number of people</p>
            <p className={styles.content}>{quantity}</p>
          </div>
          <div className={styles.details}>
            <p>Duration</p>
            <p className={styles.content}>{durationField}</p>
          </div>
        </div>
        <div className={styles["price-details"]}>
          <p className={styles.price}>Price details</p>
          <div className={styles.breakdown}>
            <p>Tour x{quantity}</p>
            <p className={styles.content}>${tourTotal}</p>
          </div>

          <div className={styles["total-container"]}>
            <>
              <div className={styles.breakdown}>
                <p>Deposit</p>
                <p className={styles.content}>${deposit}</p>
              </div>
              <div className={styles.breakdown}>
                <p>Final Payment</p>
                <p className={styles.content}>${finalPayment}</p>
              </div>
            </>

            <div className={styles.total}>
              <p>Total</p>
              <p>${tourTotal}</p>
            </div>
          </div>
        </div>
        <p className={styles.disclaimer}>
          *Flights and accommodation are included in the final price. A 30%
          deposit is required and the remaining 70% will be invoiced before we
          send you the final details of your trip.
        </p>
      </div>
    </div>
  );
}

export default SurpriseBookingSummary;
