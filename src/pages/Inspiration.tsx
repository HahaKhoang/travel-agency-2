import Banner from "../components/Banner.tsx";
import InspirationContainer from "../ui/Inspiration/InspirationContainer";
import inspiration from "../assets/img/undraw/inspiration.svg";

function Inspiration() {
  return (
    <div>
      <Banner
        h1="Looking for some inspiration?"
        text1="Check out some of the photos from our tours"
        svg={inspiration}
        bannerImg="Illustration of a person holding heart balloons"
        bgColor="var(--color-red-dark)"
      />
      <InspirationContainer />
    </div>
  );
}

export default Inspiration;
