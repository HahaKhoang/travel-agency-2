import Banner2 from "../ui/Banner2";
import reviews from "../../public/img/undraw/reviews.svg";

function Reviews() {
  return (
    <>
      <Banner2
        h1="Reviews"
        text1="See what our travelers love most about us!"
        svg={reviews}
        bgColor="var(--color-red-dark)"
      />
    </>
  );
}

export default Reviews;
