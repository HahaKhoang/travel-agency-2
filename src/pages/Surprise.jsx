import SurpriseHeader from "../ui/SurpriseHeader";
import SurpriseTypes from "../ui/SurpriseTypes";
import SurpriseHow from "../ui/SurpriseHow";
import SurpriseCTA from "../ui/SurpriseCTA";
import Banner2 from "../ui/Banner2";
import surprise from "../../public/img/undraw/surprise.svg";
function Surprise() {
  return (
    <div>
      <Banner2
        h1="Take a leap of faith"
        text1="Let us plan a surprise trip for you"
        text2="All you have to do is bring your spirit of adventure!"
        svg={surprise}
        bgColor="var(--color-red-dark)"
      />
      <SurpriseHeader />
      <SurpriseTypes />
      <SurpriseHow />
      <SurpriseCTA bgColor="var(--color-blue-med)" />
    </div>
  );
}

export default Surprise;
