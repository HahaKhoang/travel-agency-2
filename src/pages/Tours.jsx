import tour from "../../public/img/tour.jpg";
import Banner from "../ui/Banner";
import { Outlet, useLoaderData } from "react-router-dom";
import TourContainer from "../ui/TourContainer";
import { getAllTours } from "../services/apiTours";

function Tours() {
  const tours = useLoaderData();
  console.log(tours);
  return (
    <div>
      <Banner img={tour} text="Find the perfect tour for you" />
      <TourContainer data={tours} />
    </div>
  );
}

export async function loader() {
  const tours = await getAllTours();
  return tours;
}

export default Tours;
