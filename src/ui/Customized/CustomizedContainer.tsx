import CustomizedTitle from "./CustomizedTitle";
import CustomizedSteps from "../../components/CustomizedSteps.tsx";
import CustomizedPictureBanner from "./CustomizedPictureBanner.tsx";
import CTA from "../../components/CTA.tsx";

function CustomizedContainer() {
  return (
    <div>
      <CustomizedPictureBanner />
      {/* <CustomizedTitle />  */}
      <CustomizedSteps />
      <CTA
        h1="So what are you waiting for?"
        desc1="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        desc2="
         Aliquid earum aspernatur libero doloremque, dolorum, necessitatibus"
        linkTo="booking"
        buttonText="Book now"
      />
    </div>
  );
}

export default CustomizedContainer;
