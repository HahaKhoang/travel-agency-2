import styles from "./SurpriseBookingHeader.module.scss";

function SurpriseBookingHeader() {
  return (
    <div className={styles.container}>
      <h3>
        In order to perfect your customized tour, we will need some details
        about your dream trip 💕
      </h3>
      <p className={styles.text}>
        Please fill out the form below so we can get more details about your
        preferences and tastes
      </p>
    </div>
  );
}

export default SurpriseBookingHeader;
