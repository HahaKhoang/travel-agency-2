import Banner from "../components/Banner.tsx";
import SurpriseTripTypesContainer from "../ui/Surprise/SurpriseTripTypesContainer";
import tripTypes from "../assets/img/undraw/tripTypes.svg";
import CTA from "../components/CTA.tsx";

function SurpriseTripTypes() {
  return (
    <div>
      <Banner
        h1="Explore our different types of trips"
        svg={tripTypes}
        bgColor="var(--color-blue-dark)"
      />
      <SurpriseTripTypesContainer />
      <CTA
        h1="So what are you waiting for?"
        bgColor="var(--color-blue-dark)"
        desc1="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        desc2="Aliquid earum aspernatur libero doloremque, dolorum, necessitatibus"
        linkTo="/surprise-tour/booking"
        buttonText="Book now"
      />
    </div>
  );
}

export default SurpriseTripTypes;
