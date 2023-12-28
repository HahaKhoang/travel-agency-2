import CustomizedContainer from "../ui/CustomizedContainer";
import Banner2 from "../ui/Banner2";
import bestLife from "../../public/img/undraw/bestLife.svg";

function Customized() {
  return (
    <div>
      <Banner2
        h1="Time to live your best life!"
        text1="We're here to make your dreams come true"
        text2="You can travel the way you want"
        svg={bestLife}
        bgColor="var(--color-red-dark)"
      />
      <CustomizedContainer />
    </div>
  );
}

export default Customized;
