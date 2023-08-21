import TestimonialsSection from "../ui/TestimonialsSection";
import Hero from "../ui/Hero";
import Heading from "../ui/Heading";
import FeaturedSection from "../ui/FeaturedSection";
import ExperienceSection from "../ui/ExperienceSection";
import PopularSection from "../ui/PopularSection";
import PersonalizeSection from "../ui/PersonalizeSection";
import SurpriseSection from "../ui/SurpriseSection";

function Home() {
  return (
    <>
      <Hero />
      <Heading text1="Decide what type of experience you want" />
      <ExperienceSection />
      <Heading
        text1="Shop our most popular tours"
        bgColor="var(--color-blue-light)"
        fontColor="white"
      />
      <PopularSection />
      <Heading
        text1="Or personalize your own tour"
        fontColor="var(--color-red-dark)"
      />
      <PersonalizeSection />
      <Heading text1="Can't decide where to go next? Check out our featured country" />
      <FeaturedSection />
      <Heading
        text1="Feeling adventurous? Book a surprise trip!"
        fontColor="var(--color-blue-med)"
      />
      <SurpriseSection />
      <Heading text1="See what our travelers are saying" />
      <TestimonialsSection />
    </>
  );
}
export default Home;
