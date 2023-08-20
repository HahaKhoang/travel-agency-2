import Banner from "../ui/Banner";
import balloons from "../../public/img/balloons.jpg";
function Surprise() {
  return (
    <div>
      <Banner img={balloons} text="Take a leap of faith" />
    </div>
  );
}

export default Surprise;
