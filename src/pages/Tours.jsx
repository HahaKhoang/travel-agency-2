import { Outlet } from "react-router-dom";
import tour from "../../public/img/tour.jpg";
import Banner from "../ui/Banner";
import TourContainer from "../ui/TourContainer";

function Tours() {
  return (
    <div>
      <Banner img={tour} text="Find the perfect tour for you" />
      <TourContainer />
      <Outlet />
    </div>
  );
}

export default Tours;
