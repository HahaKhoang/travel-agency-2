import Banner from "../ui/Banner";
import SurpriseHeader from "../ui/SurpriseHeader";
import balloons from "../../public/img/balloons.jpg";
import SurpriseTypes from "../ui/SurpriseTypes";
import SurpriseCarousel from "../ui/SurpriseCarousel";
import SurpriseHow from "../ui/SurpriseHow";
function Surprise() {
  return (
    <div>
      <Banner img={balloons} text="Take a leap of faith" />
      <SurpriseHeader />
      <SurpriseTypes />
      {/* <SurpriseCarousel /> */}
      <SurpriseHow />
    </div>
  );
}

export default Surprise;
