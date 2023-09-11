import SurpriseBookingSummary from "./SurpriseBookingSummary";
import SurpriseForm from "./SurpriseForm";
import styles from "./SurpriseBookingContainer.module.scss";

function SurpriseBookingContainer() {
  return (
    <div style={{ backgroundColor: "var(--color-blue-light" }}>
      <div className={styles.container}>
        <SurpriseBookingSummary />
        <SurpriseForm />
      </div>
    </div>
  );
}

export default SurpriseBookingContainer;
