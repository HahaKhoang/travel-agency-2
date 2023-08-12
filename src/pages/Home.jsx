import HomePicture from "../ui/HomePicture";
import MainHeading from "../ui/MainHeading";
import Subheading from "../ui/Subheading";
import HowSection from "../ui/HowSection";
import WhySection from "../ui/WhySection";
import ToursSection from "../ui/ToursSection";
import TestimonialsSection from "../ui/TestimonialsSection";
import Hero from "../ui/Hero";
import Heading from "../ui/Heading";
import FeaturedSection from "../ui/FeaturedSection";
import Experience from "../ui/Experience";

function Home() {
  return (
    <>
      {/* <MainHeading /> */}
      {/* <HomePicture /> */}
      <Hero />
      <Heading
        text1="Can't decide where to go next?"
        text2="Check out our featured country"
      />
      <FeaturedSection />
      <Heading text1="Decide what type of experience you want" />
      <Experience />
      <Subheading />
      {/* <HowSection /> */}
      {/* <ToursSection />
      <WhySection />
      <TestimonialsSection /> */}
    </>
  );
}
export default Home;
