import AboutDetails from "../ui/AboutDetails";
import Banner2 from "../ui/Banner2";
import about from "../../public/img/undraw/about.svg";
import { useSelector } from "react-redux";

function About() {
  const name = useSelector((state) => state.tour.name);
  console.log(name);
  return (
    <div>
      {/* <Banner img={lofoten} text="Get to know me" /> */}

      <Banner2
        h1="Hi! It's nice to meet you!"
        text1="Let's get to know each other better"
        svg={about}
        bgColor="var(--color-blue-light)"
      />
      <AboutDetails />
    </div>
  );
}

export default About;
