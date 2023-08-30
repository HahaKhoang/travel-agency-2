import Banner from "../ui/Banner";
import CustomizedForm from "../ui/CustomizedForm";
import pack from "../../public/img/website/pack.jpg";
import CustomizedBookingHeader from "../ui/CustomizedBookingHeader";

function CustomizedBooking() {
  return (
    <div>
      <Banner img={pack} text="Let us know about you" />
      <CustomizedBookingHeader />
      <CustomizedForm />
    </div>
  );
}

export default CustomizedBooking;
