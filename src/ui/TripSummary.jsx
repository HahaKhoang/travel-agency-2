import { useSelector } from "react-redux";
import styles from "./TripSummary.module.scss";

function TripSummary({ image }) {
  const tourName = useSelector((state) => state.tour.name);
  const duration = useSelector((state) => state.tour.duration);
  const quantity = useSelector((state) => state.tour.quantity);
  const price = useSelector((state) => state.tour.price);
  const accommodationFee = useSelector((state) => state.tour.accommodationFee);
  const flightFee = useSelector((state) => state.tour.flightFee);
  const reservationFee = useSelector((state) => state.tour.reservationFee);
  const total = useSelector((state) => state.tour.totalPrice);
  const day = duration < 2 ? "day" : "days";

  const tourTotal = price * quantity;
  const totalPrice = accommodationFee ? tourTotal + 90 : tourTotal;
  const totalPrice2 = flightFee ? totalPrice + 140 : totalPrice;
  const totalPrice3 = reservationFee ? totalPrice2 + 130 : totalPrice2;

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles["picture-container"]}>
          <img src={image} className={styles.picture} />
        </div>

        <h3>{tourName}</h3>
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
            <p className={styles.content}>$30</p>
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
          <div className={styles.total}>
            <p>Total</p>
            <p>${totalPrice3}</p>
          </div>
        </div>
        <p className={styles.disclaimer}>
          *Price does not include flight, accommodation, or additional costs.
          The total cost only covers the itinerary and any additional features.
        </p>
      </div>
    </div>
  );
}

export default TripSummary;
