import { useDispatch } from "react-redux";
import styles from "./TourCard.module.scss";
import { NavLink } from "react-router-dom";
import { addTour } from "../../store/tourSlice.tsx";

type TourCardProps = {
  mainImage: string;
  name: string;
  shortDesc: string;
  duration: number;
  category: string;
  price: number;
  country: string;
  slug: string;
  id: number;
};

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
}: TourCardProps) {
  const dispatch = useDispatch();
  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);
  const day = duration < 2 ? "day" : "days";

  function updateTour() {
    const tour = {
      id,
      name,
      slug,
      duration,
      quantity: 1,
      price,
      totalPrice: price,
    };
    dispatch(addTour(tour));
  }

  return (
    <div className={styles.container}>
      <NavLink to={slug} className={styles["picture-container"]}>
        <img src={mainImage} className={styles.picture} />
      </NavLink>
      <div className={styles["detail-container"]}>
        <div className={styles.details}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.description}>{shortDesc}</p>
          <div className={styles.extras}>
            <p>
              Duration: {duration} {day}
            </p>
            <p>Category: {capitalized}</p>
          </div>
          <p className={styles.price}>Price: ${price}</p>
        </div>
        <NavLink to={`${slug}`} className={styles.button} onClick={updateTour}>
          Let's go to {country}!
        </NavLink>
      </div>
    </div>
  );
}

export default TourCard;
