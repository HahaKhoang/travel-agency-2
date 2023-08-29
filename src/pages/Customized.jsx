import Banner from "../ui/Banner";
import customized from "../../public/img/website/customized.jpg";
import CustomizedForm from "../ui/CustomizedForm";
import CustomizedHeader from "../ui/CustomizedHeader";
import CustomizedContainer from "../ui/CustomizedContainer";

function Customized() {
  return (
    <div>
      <Banner img={customized} text="Yes, live your best life!" />
      <CustomizedContainer />
      {/* <CustomizedForm /> */}
    </div>
  );
}

export default Customized;
