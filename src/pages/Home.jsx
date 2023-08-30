import TestimonialsSection from "../ui/TestimonialsSection";
import Hero from "../ui/Hero";
import Heading from "../ui/Heading";
import FeaturedSection from "../ui/FeaturedSection";
import ExperienceSection from "../ui/ExperienceSection";
import PopularSection from "../ui/PopularSection";
import CustomizedSection from "../ui/CustomizedSection";
import SurpriseSection from "../ui/SurpriseSection";

function Home() {
  return (
    <>
      <Hero />
      <Heading
        text1="Decide what type of experience you want"
        fontColor="var(--color-blue-dark)"
      />
      <ExperienceSection />
      <Heading
        text1="Shop our most popular tours"
        fontColor="var(--color-blue-med)"
      />
      <PopularSection />
      <Heading
        text1="Or customize your own tour"
        fontColor="var(--color-red-dark)"
      />
      <CustomizedSection />
      <Heading
        text1="Can't decide where to go next? Check out our featured country"
        fontColor="var(--color-blue-dark)"
      />
      <FeaturedSection />
      <Heading
        text1="Feeling adventurous? Book a surprise trip!"
        fontColor="var(--color-blue-med)"
      />
      <SurpriseSection />
      <Heading
        text1="See what our travelers are saying"
        fontColor="var(--color-blue-dark)"
      />
      <TestimonialsSection />
    </>
  );
}
export default Home;
