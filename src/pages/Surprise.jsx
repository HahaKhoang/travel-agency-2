import Banner from "../ui/Banner";
import SurpriseHeader from "../ui/SurpriseHeader";
import night from "../../public/img/website/night.jpg";
import SurpriseTypes from "../ui/SurpriseTypes";
import SurpriseCarousel from "../ui/SurpriseCarousel";
import SurpriseHow from "../ui/SurpriseHow";
import SurpriseCTA from "../ui/SurpriseCTA";
function Surprise() {
  return (
    <div>
      <Banner img={night} text="Take a leap of faith" />
      <SurpriseHeader />
      <SurpriseTypes />
      {/* <SurpriseCarousel /> */}
      <SurpriseHow />
      <SurpriseCTA />
    </div>
  );
}

export default Surprise;
