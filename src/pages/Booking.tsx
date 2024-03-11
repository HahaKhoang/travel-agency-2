import Banner from "../components/Banner.tsx";
import BookingContainer from "../components/BookingContainer.tsx";
import LoadingSpinner from "../components/LoadingSpinner.tsx";
import { useSingleTour } from "../features/tours/useSingleTour.js";
import TourBookingForm from "../ui/Tours/TourBookingForm.tsx";
import TourBookingSummary from "../ui/Tours/TourBookingSummary.tsx";

function Booking() {
  const { isLoading, tour } = useSingleTour();
  const { tourName, price, duration, imageWelcome } = tour;

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Banner
        h1={tour.tourName}
        text1={`${tour.welcome}!`}
        text2={`Welcome to ${tour.country}!`}
        bgImg={tour.imageWelcome}
      />
      <BookingContainer>
        <TourBookingForm tour={tour} />
        <TourBookingSummary
          tourName={tourName}
          price={price}
          duration={duration}
          imageWelcome={imageWelcome}
        />
      </BookingContainer>
    </div>
  );
}

export default Booking;
