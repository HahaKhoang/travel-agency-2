import Banner from "../components/Banner.tsx";
import SurpriseHeader from "../ui/SurpriseHeader";
import SurpriseTypes from "../ui/Surprise/SurpriseTypes";
import SurpriseHow from "../ui/Surprise/SurpriseHow";
import SurpriseCTA from "../ui/SurpriseCTA";
import surprise from "../assets/img/undraw/surprise.svg";
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
      {/* <SurpriseHeader /> */}
      <SurpriseTypes />
      <SurpriseHow />
      {/* <SurpriseCTA bgColor="var(--color-blue-med)" /> */}
    </div>
  );
}

export default Surprise;
