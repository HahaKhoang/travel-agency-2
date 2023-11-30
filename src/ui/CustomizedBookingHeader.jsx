import styles from "./CustomizedBookingHeader.module.scss";

function CustomizedBookingHeader() {
  return (
    <div className={styles.container}>
      <p className={styles.header}>
        In order to perfect your customized tour, we will need some details
        about your dream trip 💕
      </p>
      <p className={styles.text}>
        Please fill out the form below so we can get more details about your
        preferences and tastes
      </p>
    </div>
  );
}

export default CustomizedBookingHeader;
