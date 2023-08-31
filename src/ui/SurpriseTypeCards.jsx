import styles from "./SurpriseTypeCards.module.scss";

function SurpriseTypeCards({ icon, title, description, budget }) {
  return (
    <div className={styles.types}>
      <div>
        <img src={icon} className={styles.svg} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.budget}>Budget starts from ${budget} per person</p>
      <a className={styles.link}>&rarr; Learn more</a>
    </div>
  );
}

export default SurpriseTypeCards;
