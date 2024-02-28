import Banner from "../components/Banner.tsx";
import CustomizedBookingHeader from "../ui/CustomizedBookingHeader";
import customizedBooking from "../assets/img/undraw/customizedBooking.svg";
import CustomizedBookingContainer from "../ui/CustomizedBooking/CustomizedBookingContainer";

function CustomizedBooking() {
  return (
    <div>
      <Banner
        h1="Tell us about yourself"
        text1="In order to perfect your customized tour, we'll need some details about your dream trip"
        svg={customizedBooking}
        bgColor="var(--color-red-dark)"
      />
      {/* <CustomizedBookingHeader /> */}
      <CustomizedBookingContainer />
    </div>
  );
}

export default CustomizedBooking;
