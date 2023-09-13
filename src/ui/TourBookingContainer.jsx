import { useSingleTour } from "../features/tours/useSingleTour";
import BookingForm from "./BookingForm";
import BookingSummary from "./BookingSummary";
import styles from "./TourBookingContainer.module.scss";
import TripSummary from "./TripSummary";

function TourBookingContainer() {
  const { isLoading, tour, error } = useSingleTour();
  const { tourName, price, duration, cities, imageWelcome } = tour;

  return (
    <div style={{ backgroundColor: "var(--color-blue-med" }}>
      <div className={styles.container}>
        <BookingForm />
        {/* <BookingSummary
          tourName={tourName}
          price={price}
          duration={duration}
          cities={cities}
          image={imageWelcome}
        /> */}
        <TripSummary
          tourName={tourName}
          price={price}
          duration={duration}
          cities={cities}
          image={imageWelcome}
        />
      </div>
    </div>
  );
}

export default TourBookingContainer;
