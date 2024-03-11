import styles from "./TourBookingContainer.module.scss";
import TourBookingSummary from "./TourBookingSummary.tsx";

function TourBookingContainer() {
  return (
    <div style={{ backgroundColor: "var(--color-blue-dark" }}>
      <div className={styles.container}>
        <TourBookingSummary />
      </div>
    </div>
  );
}

export default TourBookingContainer;
