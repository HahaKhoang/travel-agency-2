import Banner from "../components/Banner.tsx";
import SurpriseTypes from "../ui/Surprise/SurpriseTypes";
import SurpriseHow from "../ui/Surprise/SurpriseHow";
import surprise from "../assets/img/undraw/surprise.svg";
import CTA from "../components/CTA.tsx";
import SurprisePictureBanner from "../ui/Surprise/SurprisePictureBanner.tsx";
function Surprise() {
  return (
    <div>
      <Banner
        h1="Take a leap of faith"
        text1="Let us plan a surprise trip for you"
        text2="All you have to do is bring your spirit of adventure!"
        svg={surprise}
        bgColor="var(--color-red-dark)"
      />
      <SurprisePictureBanner />
      <SurpriseTypes />
      <SurpriseHow />
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

export default Surprise;
