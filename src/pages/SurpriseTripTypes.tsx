import Banner from "../components/Banner.tsx";
import SurpriseTripTypesContainer from "../ui/Surprise/SurpriseTripTypesContainer";
import SurpriseCTA from "../ui/SurpriseCTA";
import tripTypes from "../assets/img/undraw/tripTypes.svg";

function SurpriseTripTypes() {
  return (
    <div>
      <Banner
        h1="Explore our different types of trips"
        svg={tripTypes}
        bgColor="var(--color-blue-dark)"
      />
      <SurpriseTripTypesContainer />
      {/* <SurpriseCTA bgColor="var(--color-blue-dark)" /> */}
    </div>
  );
}

export default SurpriseTripTypes;
