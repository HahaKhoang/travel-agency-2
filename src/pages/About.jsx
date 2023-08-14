import AboutDetails from "../ui/AboutDetails";
import Banner from "../ui/Banner";
import lofoten from "../../public/img/lofoten.jpg";

function About() {
  return (
    <div>
      <Banner img={lofoten} text="Get to know me" />
      <AboutDetails />
    </div>
  );
}

export default About;
