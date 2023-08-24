import tour from "../../public/img/website/tour.jpg";
import Banner from "../ui/Banner";
import TourContainer from "../ui/TourContainer";

function Tours() {
  return (
    <div>
      <Banner img={tour} text="Find the perfect tour for you" />
      <TourContainer />
    </div>
  );
}

export default Tours;
