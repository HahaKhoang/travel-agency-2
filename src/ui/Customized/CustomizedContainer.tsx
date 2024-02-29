import HowToSteps from "../../components/HowToSteps.tsx";
import CustomizedPictureBanner from "./CustomizedPictureBanner.tsx";
import CTA from "../../components/CTA.tsx";
import horseshoe from "../../assets/img/inspiration/horseshoe.jpg";
import taipei from "../../assets/img/inspiration/taipei.jpg";
import machuPichu from "../../assets/img/inspiration/machuPichu.jpg";
import capetown from "../../assets/img/inspiration/capetown.jpg";
import tori from "../../assets/img/inspiration/tori.jpg";
import Subheading from "../../components/Subheading.tsx";

function CustomizedContainer() {
  return (
    <div>
      <CustomizedPictureBanner />
      <Subheading
        h1="Tell us about your perfect trip and we'll help you make it come true"
        h3="Here's how it works"
      />
      <HowToSteps
        bgColor="var(--color-blue-dark)"
        fontColor="white"
        direction="right"
        button={true}
        img1={horseshoe}
        img2={taipei}
        img3={machuPichu}
        img4={capetown}
        img5={tori}
        step1text1=" Fill out a survey so we can get to know you better"
        step1text2="The more details you provide, the more customizations we can
        provide"
        step2text1="We will review your survey contents and set up a meeting to
        confirm the details"
        step2text2="During the meeting, you can add any additional information"
        step3text1="We will have one more final meeting where I will present the
        customized tour I have designed for you"
        step3text2="Any final changes will be made at this point"
        step4text1="Now you just wait until your trip!"
        step4text2="We will be here for any necessary support needed before your trip"
        step5text1="Pack your bags and grab your passport"
        step5text2="Time to make some unforgettable memories!"
      />
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
