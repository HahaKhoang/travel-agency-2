import Banner2 from "../ui/Banner2";
import LoadingSpinner from "../ui/LoadingSpinner";
import { useSingleTour } from "../features/tours/useSingleTour.js";

function Booking() {
  const { isLoading, tour, error } = useSingleTour();
  console.log(tour);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Banner2
        h1={tour.tourName}
        text1={`${tour.welcome} | Welcome to ${tour.country}!`}
        bgColor="var(--color-blue-light)"
      />
    </div>
  );
}

export default Booking;
