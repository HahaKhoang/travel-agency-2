import Banner from "../ui/Banner";

import InspirationContainer from "../ui/InspirationContainer";
import Banner2 from "../ui/Banner2";
import inspiration from "../../public/img/undraw/inspiration.svg";

function Inspiration() {
  return (
    <div>
      <Banner2
        h1="Looking for some inspiration?"
        text1="Check out some of the photos from our tours"
        svg={inspiration}
        bgColor="var(--color-red-dark)"
      />
      <InspirationContainer />
    </div>
  );
}

export default Inspiration;
