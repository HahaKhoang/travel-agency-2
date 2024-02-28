import Banner from "../components/Banner.tsx";
import LoadingSpinner from "../components/LoadingSpinner.tsx";
import { useSingleTour } from "../features/tours/useSingleTour.js";
import TourBookingContainer from "../components/TourBookingContainer.tsx";

function Booking() {
  const { isLoading, tour } = useSingleTour();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Banner
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
