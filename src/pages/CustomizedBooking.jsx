import Banner from "../ui/Banner";
import CustomizedForm from "../ui/CustomizedForm";
import pack from "../../public/img/website/pack.jpg";
import CustomizedBookingHeader from "../ui/CustomizedBookingHeader";

function CustomizedBooking() {
  return (
    <div>
      <Banner img={pack} text="Tell us about yourself" />
      <CustomizedBookingHeader />
      <CustomizedForm />
    </div>
  );
}

export default CustomizedBooking;
