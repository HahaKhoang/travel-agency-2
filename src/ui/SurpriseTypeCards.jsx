import styles from "./SurpriseTypeCards.module.scss";

function SurpriseTypeCards({ icon, title, description, budget }) {
  return (
    <div className={styles.types}>
      <div className={styles.icon}>{icon}</div>
      <h4>{title}</h4>
      <p className={styles.description}>{description}</p>
      <p className={styles.budget}>Budget starts from ${budget} per person</p>
      <a className={styles.link}>&rarr; Learn more</a>
    </div>
  );
}

export default SurpriseTypeCards;
