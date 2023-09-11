import styles from "./BookingSummary.module.scss";
import { useSelector } from "react-redux";

function BookingSummary({ image, cities }) {
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
        <div className={styles["info-container"]}>
          <h3>Trip summary</h3>
          <div className={styles["picture-container"]}>
            <img src={image} className={styles.picture} />
          </div>
          <h3>{tourName}</h3>
          <div className={styles["content-container"]}>
            <p className={styles.label}>Duration</p>
            <p className={styles.content}>
              {duration} {day}
            </p>
          </div>
          <div className={styles["content-container"]}>
            <p className={styles.label}>Price per person</p>
            <p className={styles.content}>${price}</p>
          </div>
          <div className={styles["content-container"]}>
            <p className={styles.label}>Number of people</p>
            <p className={styles.content}>{quantity}</p>
          </div>
          <div className={styles["content-container"]}>
            <p className={styles.label}>Number of cities</p>
            <p className={styles.content}>{cities.length}</p>
          </div>
          <div className={styles["extras-container"]}>
            <p className={styles.label}>Extras</p>
            {!accommodationFee && !flightFee && !reservationFee && (
              <div className={styles.extras}>
                <p>None</p>
              </div>
            )}
            {accommodationFee && (
              <div className={styles.extras}>
                <p>Accommodation booking service</p>
                <p>$90</p>
              </div>
            )}
            {flightFee && (
              <div className={styles.extras}>
                <p>Flight booking service</p>
                <p>$140</p>
              </div>
            )}
            {reservationFee && (
              <div className={styles.extras}>
                <p>Reservation booking service</p>
                <p>$130</p>
              </div>
            )}
          </div>
          <div className={styles["total-container"]}>
            <p className={styles.label}>Cost breakdown</p>
            <div className={styles.extras}>
              <p>Tour x{quantity}</p>
              <p>${tourTotal}</p>
            </div>
            {accommodationFee && (
              <div className={styles.extras}>
                <p>Accommodation booking service</p>
                <p>$90</p>
              </div>
            )}
            {flightFee && (
              <div className={styles.extras}>
                <p>Flight booking service</p>
                <p>$140</p>
              </div>
            )}
            {reservationFee && (
              <div className={styles.extras}>
                <p>Reservation booking service</p>
                <p>$130</p>
              </div>
            )}
          </div>
          <div className={styles.extras}>
            <p className={styles.total}>Total</p>
            <p className={styles.price}>${totalPrice3}</p>
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
