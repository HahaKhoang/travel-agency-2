import { useNavigate } from "react-router-dom";
import styles from "./SingleTourBookNow.module.scss";

function SingleTourBookNow({ duration, price, cities, category, slug }) {
  const navigate = useNavigate();
  const formattedCities = cities.join(", ");

  function onClick(e) {
    e.preventDefault();
    navigate(`/booking/${slug}`);
  }

  return (
    <div className={styles.container}>
      <div className={styles["details-container"]}>
        <div className={styles["details-center"]}>
          <h3 className={styles.header}>
            {duration} days from ${price}~
          </h3>
          <div className={styles.tour}>
            <p className={styles.label}>
              Category: {category.charAt(0).toUpperCase() + category.slice(1)}
            </p>
          </div>
          <div className={styles.details}>
            <p className={styles.label}>Cities include:</p>
            <span className={styles.text}>{formattedCities}</span>
          </div>
          <div className={styles.details}>
            <p className={styles.label}>*Customizations available</p>
          </div>
        </div>
      </div>
      <div className={styles["about-container"]}>
        <p className={styles.about}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quidem
          quam harum animi, tenetur vel ullam similique culpa cumque fuga
          distinctio adipisci tempore inventore non? Excepturi omnis praesentium
          ratione laborum.
        </p>
        <button onClick={onClick} className={styles.button}>
          Book now
        </button>
      </div>
    </div>
  );
}

export default SingleTourBookNow;
