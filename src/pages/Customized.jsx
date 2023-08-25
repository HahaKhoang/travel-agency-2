import Banner from "../ui/Banner";
import customized from "../../public/img/website/customized.jpg";
import CustomizedForm from "../ui/CustomizedForm";

function Customized() {
  return (
    <div>
      <Banner img={customized} text="Yes, live your best life!" />
      <CustomizedForm />
    </div>
  );
}

export default Customized;
