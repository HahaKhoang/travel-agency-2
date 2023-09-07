import BookingForm from "./BookingForm";
import BookingSummary from "./BookingSummary";
import styles from "./TourBookingContainer.module.scss";

function TourBookingContainer() {
  return (
    <div style={{ backgroundColor: "var(--color-blue-med" }}>
      <div className={styles.container}>
        <BookingSummary />
        <BookingForm />
      </div>
    </div>
  );
}

export default TourBookingContainer;
