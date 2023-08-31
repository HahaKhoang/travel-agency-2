import Banner from "../ui/Banner";
import night from "../../public/img/website/night.jpg";
import SurpriseTripTypesContainer from "../ui/SurpriseTripTypesContainer";
import SurpriseCTA from "../ui/SurpriseCTA";
import Banner2 from "../ui/Banner2";
import tripTypes from "../../public/img/undraw/tripTypes.svg";

function SurpriseTripTypes() {
  return (
    <div>
      {/* <Banner img={night} text="Explore our different types of trips" /> */}
      <Banner2 h1="Explore our different types of trips" svg={tripTypes} />
      <SurpriseTripTypesContainer />
      <SurpriseCTA bgColor="var(--color-blue-dark)" />
    </div>
  );
}

export default SurpriseTripTypes;
