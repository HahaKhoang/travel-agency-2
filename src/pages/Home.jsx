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
import ExperienceSection from "../ui/ExperienceSection";
import PopularSection from "../ui/PopularSection";
import PersonalizeSection from "../ui/PersonalizeSection";

function Home() {
  return (
    <>
      {/* <MainHeading /> */}
      {/* <HomePicture /> */}
      <Hero />
      <Heading text1="Can't decide where to go next? Check out our featured country" />
      <FeaturedSection />
      <Heading text1="Decide what type of experience you want" />
      <ExperienceSection />
      <Heading text1="Shop our most popular tours" />
      <PopularSection />
      <Heading text1="Or personalize your own tour" />
      <PersonalizeSection />
      {/* <ToursSection /> */}
      <Subheading />
      {/* <HowSection /> */}
      {/* <WhySection /> */}
      {/* <TestimonialsSection /> */}
    </>
  );
}
export default Home;
