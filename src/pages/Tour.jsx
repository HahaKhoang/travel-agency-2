import { Outlet } from "react-router-dom";
import Banner from "../ui/Banner";
import bi3 from "../../public/img/bi3.jpg";

function Tour() {
  return (
    <div>
      <Banner img={bi3} text="Find the perfect tour for you" />
      <Outlet />
    </div>
  );
}

export default Tour;
