import Banner from "../ui/Banner";
import night from "../../public/img/website/night.jpg";
import SurpriseTripTypesContainer from "../ui/SurpriseTripTypesContainer";
import SurpriseCTA from "../ui/SurpriseCTA";

function SurpriseTripTypes() {
  return (
    <div>
      <Banner img={night} text="Explore our different types of trips" />
      <SurpriseTripTypesContainer />
      <SurpriseCTA bgColor="var(--color-blue-dark)" />
    </div>
  );
}

export default SurpriseTripTypes;
