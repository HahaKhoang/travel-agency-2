import AboutDetails from "../ui/AboutDetails";
import Banner2 from "../ui/Banner2";
import about from "../../public/img/undraw/about.svg";

function About() {
  return (
    <div>
      <Banner2
        h1="Hi! It's nice to meet you!"
        text1="Let's get to know each other better"
        svg={about}
        bgColor="var(--color-red-dark)"
      />
      <AboutDetails />
    </div>
  );
}

export default About;
