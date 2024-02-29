import CustomizedCTA from "./CustomizedCTA";
import CustomizedTitle from "./CustomizedTitle";
import CustomizedSteps from "../../components/CustomizedSteps.tsx";
import CustomizedPictureBanner from "./CustomizedPictureBanner.tsx";

function CustomizedContainer() {
  return (
    <div>
      <CustomizedPictureBanner />
      {/* <CustomizedTitle />  */}
      <CustomizedSteps />
      {/* <CustomizedCTA /> */}
    </div>
  );
}

export default CustomizedContainer;
