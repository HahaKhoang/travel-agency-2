import Banner from "../components/Banner.tsx";
import AboutContainer from "../ui/AboutContainer.tsx";
import about from "../assets/img/undraw/about.svg";

function About() {
  return (
    <div>
      <Banner
        h1="Hi! It's nice to meet you!"
        text1="Let's get to know each other better"
        svg={about}
        bannerImg="Illustration of 2 people high fiving"
        bgColor="var(--color-red-dark)"
      />
      <AboutContainer />
    </div>
  );
}

export default About;
