import styles from "./SurpriseBookingHeader.module.scss";

function SurpriseBookingHeader() {
  return (
    <div className={styles.container}>
      <h3>
        In order to create a fun surprise for you, we need to know some extra
        details 💕
      </h3>
      <p className={styles.text}>
        Please fill out the form below so we can get more details about your
        preferences and tastes
      </p>
    </div>
  );
}

export default SurpriseBookingHeader;
