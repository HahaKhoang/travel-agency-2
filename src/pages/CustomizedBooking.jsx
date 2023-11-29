import Banner from "../ui/Banner";
import pack from "../../public/img/website/pack.jpg";
import CustomizedBookingHeader from "../ui/CustomizedBookingHeader";
import Banner2 from "../ui/Banner2";
import customizedBooking from "../../public/img/undraw/customizedBooking.svg";
import CustomizedBookingContainer from "../ui/CustomizedBookingContainer";

function CustomizedBooking() {
  return (
    <div>
      {/* <Banner img={pack} text="Tell us about yourself" /> */}
      <Banner2
        h1="Tell us about yourself"
        text1="In order to perfect your customized tour, we'll need some details about your dream trip"
        svg={customizedBooking}
        bgColor="var(--color-red-dark)"
      />
      <CustomizedBookingHeader />
      <CustomizedBookingContainer />
    </div>
  );
}

export default CustomizedBooking;
