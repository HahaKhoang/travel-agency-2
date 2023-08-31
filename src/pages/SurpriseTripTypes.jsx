import Banner from "../ui/Banner";
import night from "../../public/img/website/night.jpg";
import SurpriseTripTypesContainer from "../ui/SurpriseTripTypesContainer";

function SurpriseTripTypes() {
  return (
    <div>
      <Banner img={night} text="Explore our different types of trips" />
      <SurpriseTripTypesContainer />
    </div>
  );
}

export default SurpriseTripTypes;
