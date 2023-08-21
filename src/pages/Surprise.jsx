import Banner from "../ui/Banner";
import SurpriseHeader from "../ui/SurpriseHeader";
import balloons from "../../public/img/balloons.jpg";
function Surprise() {
  return (
    <div>
      <Banner img={balloons} text="Take a leap of faith" />
      <SurpriseHeader />
    </div>
  );
}

export default Surprise;
