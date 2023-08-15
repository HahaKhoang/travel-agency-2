import tour from "../../public/img/tour.jpg";
import Banner from "../ui/Banner";
import { Outlet } from "react-router-dom";

function Tours() {
  return (
    <div>
      <Banner img={tour} text="Find the perfect tour for you" />
      <Outlet />
    </div>
  );
}

export default Tours;
