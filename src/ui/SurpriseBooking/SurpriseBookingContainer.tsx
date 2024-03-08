import SurpriseBookingForm from "./SurpriseBookingForm.tsx";
import styles from "./SurpriseBookingContainer.module.scss";

import SurpriseBookingSummary from "./SurpriseBookingSummary.tsx";

function SurpriseBookingContainer() {
  return (
    <div style={{ backgroundColor: "var(--color-blue-dark" }}>
      <div className={styles.container}>
        <SurpriseBookingForm />
        <SurpriseBookingSummary />
      </div>
    </div>
  );
}

export default SurpriseBookingContainer;
