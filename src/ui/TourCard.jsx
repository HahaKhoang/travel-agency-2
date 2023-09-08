import { useDispatch } from "react-redux";
import styles from "./TourCard.module.scss";
import { NavLink } from "react-router-dom";
import { addTour } from "../features/tours/tourSlice";

function TourCard({
  mainImage,
  name,
  shortDesc,
  duration,
  category,
  price,
  country,
  slug,
  id,
}) {
  const dispatch = useDispatch();
  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);
  const day = duration < 2 ? "day" : "days";

  function onClick() {
    console.log(slug);
    const currentTour = {
      id,
      slug,
      name,
      quantity: 1,
      price,
      totalPrice: price * 1,
    };
    dispatch(addTour(currentTour));
  }

  return (
    <div className={styles.container}>
      <NavLink to={slug}>
        <img src={mainImage} className={styles.picture} />
      </NavLink>
      <div className={styles["detail-container"]}>
        <p className={styles.title}>{name}</p>
        <p className={styles.description}>{shortDesc}</p>
        <div className={styles.extras}>
          <p>
            Duration: {duration} {day}
          </p>
          <p>Category: {capitalized}</p>
        </div>
        <p className={styles.price}>Price: ${price}</p>
        <NavLink to={`${slug}`} className={styles.button} onClick={onClick}>
          Let's go to {country}!
        </NavLink>
      </div>
    </div>
  );
}

export default TourCard;
