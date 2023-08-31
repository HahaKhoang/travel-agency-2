import Banner from "../ui/Banner";
import pack from "../../public/img/website/pack.jpg";
import CustomizedForm from "../ui/CustomizedForm";
import CustomizedHeader from "../ui/CustomizedHeader";
import CustomizedContainer from "../ui/CustomizedContainer";
import Banner2 from "../ui/Banner2";
import customize from "../../public/img/undraw/customize.svg";

function Customized() {
  return (
    <div>
      {/* <Banner img={pack} text="Yes, live your best life!" /> */}
      <Banner2
        h1="Time to live your best life!"
        text1="We're here to make your dreams come true"
        text2="You can travel the way you want"
        svg={customize}
        bgColor="var(--color-blue-light)"
      />
      <CustomizedContainer />
      {/* <CustomizedForm /> */}
    </div>
  );
}

export default Customized;
