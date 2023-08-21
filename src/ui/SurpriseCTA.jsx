import styles from "./SurpriseCTA.module.scss";

function SurpriseCTA() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>So what are you waiting for?</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br /> Aliquid earum aspernatur libero doloremque, dolorum,
          necessitatibus{" "}
        </p>
        <button className={styles.button}>Book now</button>
      </div>
    </div>
  );
}

export default SurpriseCTA;
