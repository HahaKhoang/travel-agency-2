import Banner from "../components/Banner.tsx";
import CustomizedContainer from "../ui/Customized/CustomizedContainer";
import bestLife from "../assets/img/undraw/bestLife.svg";

function Customized() {
  return (
    <div>
      <Banner
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
