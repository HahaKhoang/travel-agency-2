import SurpriseTripTypesContainer from "../ui/SurpriseTripTypesContainer";
import SurpriseCTA from "../ui/SurpriseCTA";
import Banner2 from "../ui/Banner2";
import tripTypes from "../../public/img/undraw/tripTypes.svg";

function SurpriseTripTypes() {
  return (
    <div>
      <Banner2
        h1="Explore our different types of trips"
        svg={tripTypes}
        bgColor="var(--color-blue-dark)"
      />
      <SurpriseTripTypesContainer />
      <SurpriseCTA bgColor="var(--color-blue-dark)" />
    </div>
  );
}

export default SurpriseTripTypes;
