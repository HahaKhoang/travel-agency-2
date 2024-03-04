import Banner from "../components/Banner.tsx";
import customizedBooking from "../assets/img/undraw/customizedBooking.svg";
import CustomizedBookingContainer from "../ui/CustomizedBooking/CustomizedBookingContainer";
import Subheading from "../components/Subheading.tsx";

function CustomizedBooking() {
  return (
    <div>
      <Banner
        h1="Tell us about yourself"
        text1="In order to perfect your customized tour, we'll need some details about your dream trip"
        svg={customizedBooking}
        bgColor="var(--color-red-dark)"
      />
      <Subheading
        h1="In order to perfect your customized tour, we will need some details about your dream trip 💕"
        h3="Please fill out the form below so we can get more details about your preferences and tastes"
      />
      <CustomizedBookingContainer />
    </div>
  );
}

export default CustomizedBooking;
