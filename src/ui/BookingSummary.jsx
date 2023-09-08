import styles from "./BookingSummary.module.scss";
import jk2 from "../../public/img/jk2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useSingleTour } from "../features/tours/useSingleTour";

function BookingSummary({ tourName, price, duration, image, cities }) {
  // const tourName = useSelector((state) => state.tour.tour.name);
  const tourPrice = useSelector((state) => state.tour.tour.price);
  const x = useSelector((state) => state.tour);
  console.log(x);
  //   const tourName = useSelector((state) => state.tour.tourName);

  const slug = useParams();
  // console.log(slug);

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
            <p className={styles.content}>{duration} days</p>
          </div>
          <div className={styles["content-container"]}>
            <p className={styles.label}>Price per person</p>
            <p className={styles.content}>${price}</p>
          </div>
          <div className={styles["content-container"]}>
            <p className={styles.label}>Number of people</p>
            <p className={styles.content}>3</p>
          </div>
          <div className={styles["content-container"]}>
            <p className={styles.label}>Number of cities</p>
            <p className={styles.content}>{cities.length}</p>
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
