import Banner from "../ui/Banner";
import CustomizedForm from "../ui/CustomizedForm";
import pack from "../../public/img/website/pack.jpg";

function CustomizedBooking() {
  return (
    <div>
      <Banner img={pack} text="Let us know about you" />
      <CustomizedForm />
    </div>
  );
}

export default CustomizedBooking;
