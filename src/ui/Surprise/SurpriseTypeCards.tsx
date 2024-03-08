import { NavLink } from "react-router-dom";
import styles from "./SurpriseTypeCards.module.scss";

type SurpriseTypeCardsProps = {
  icon: string;
  title: string;
  description: string;
  budget: number;
};

function SurpriseTypeCards({
  icon,
  title,
  description,
  budget,
}: SurpriseTypeCardsProps) {
  return (
    <div className={styles.types}>
      <div className={styles.illustration}>
        <img src={icon} className={styles.svg} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.budget}>Budget starts from ${budget} per person</p>
      <NavLink to="trip-types" className={styles.link}>
        &rarr; Learn more
      </NavLink>
    </div>
  );
}

export default SurpriseTypeCards;
