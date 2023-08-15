import AboutDetails from "../ui/AboutDetails";
import Banner from "../ui/Banner";
import lofoten from "../../public/img/lofoten.jpg";
import { useEffect } from "react";
import { getAllTours } from "../services/apiTours";

function About() {
  useEffect(function () {
    getAllTours().then((data) => console.log(data));
  }, []);
  return (
    <div>
      <Banner img={lofoten} text="Get to know me" />
      <AboutDetails />
    </div>
  );
}

export default About;
