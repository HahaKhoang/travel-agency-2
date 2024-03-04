import styles from "./SurpriseBookingSummary.module.scss";
import { useAppSelector } from "../../store/hooks";

function SurpriseBookingSummary({ image, header, disclaimer }) {
  const { duration, quantity, price } = useAppSelector(
    (state) => state.surprise
  );
  const day = duration < 2 ? "day" : "days";

  const tourTotal = price * quantity;
  // const totalPrice = accommodationFee ? tourTotal + 90 : tourTotal;
  // const totalPrice2 = flightFee ? totalPrice + 140 : totalPrice;
  // const totalPrice3 = reservationFee ? totalPrice2 + 130 : totalPrice2;
  const deposit = Math.floor(tourTotal / 3);
  const finalPayment = Math.ceil(tourTotal - deposit);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles["picture-container"]}>
          <img src={image} className={styles.picture} />
        </div>

        <h3>{header ? `${header}` : `${name}`}</h3>
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
            <p className={styles.content}>
              {duration} {day}
            </p>
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
        <p className={styles.disclaimer}>{disclaimer}</p>
      </div>
    </div>
  );
}

export default SurpriseBookingSummary;
