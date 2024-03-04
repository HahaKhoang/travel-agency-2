import styles from "./TripSummary.module.scss";
import { useAppSelector } from "../store/hooks.tsx";

type TripSummaryProps = {
  image: string;
  header: string;
  slice: "customized" | "surprise";
  disclaimer: string;
};

function TripSummary({ image, header, slice, disclaimer }: TripSummaryProps) {
  const {
    duration,
    quantity,
    price,
    accommodationFee,
    flightFee,
    reservationFee,
  } = useAppSelector((state) => state.surprise);
  console.log(duration, quantity, price);

  let sliceState;

  if (slice === "customized") {
    const sliceState = useAppSelector((state) => state.surprise);
  }
  if (slice === "surprise") {
    const sliceState = useAppSelector((state) => state.surprise);
  }

  console.log(sliceState);

  const day = duration < 2 ? "day" : "days";

  const tourTotal = price * quantity;
  const totalPrice = accommodationFee ? tourTotal + 90 : tourTotal;
  const totalPrice2 = flightFee ? totalPrice + 140 : totalPrice;
  const totalPrice3 = reservationFee ? totalPrice2 + 130 : totalPrice2;
  const deposit = Math.floor(totalPrice3 / 3);
  const finalPayment = Math.ceil(totalPrice3 - deposit);

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
          {accommodationFee && (
            <div className={styles.breakdown}>
              <p>Accommodation booking service</p>
              <p className={styles.content}>$90</p>
            </div>
          )}
          {flightFee && (
            <div className={styles.breakdown}>
              <p>Flight booking service</p>
              <p className={styles.content}>$140</p>
            </div>
          )}
          {reservationFee && (
            <div className={styles.breakdown}>
              <p>Reservation booking service</p>
              <p className={styles.content}>$130</p>
            </div>
          )}

          <div className={styles["total-container"]}>
            {slice === "surprise" && (
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
            )}
            <div className={styles.total}>
              <p>Total</p>
              <p>${totalPrice3}</p>
            </div>
          </div>
        </div>
        <p className={styles.disclaimer}>{disclaimer}</p>
      </div>
    </div>
  );
}

export default TripSummary;
