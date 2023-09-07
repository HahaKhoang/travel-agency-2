import Banner2 from "../ui/Banner2";
import LoadingSpinner from "../ui/LoadingSpinner";
import { useSingleTour } from "../features/tours/useSingleTour.js";
import TourBookingContainer from "../ui/TourBookingContainer";

function Booking() {
  const { isLoading, tour, error } = useSingleTour();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Banner2
        h1={tour.tourName}
        text1={`${tour.welcome}!`}
        text2={`Welcome to ${tour.country}!`}
        bgImg={tour.imageWelcome}
      />
      <TourBookingContainer />
    </div>
  );
}

export default Booking;
