import Banner from "../components/Banner.tsx";
import reviews from "../assets/img/undraw/reviews.svg";
import ReviewsContainer from "../ui/ReviewsContainer";

function Reviews() {
  return (
    <>
      <Banner
        h1="See what our travelers love most about us!"
        svg={reviews}
        bgColor="var(--color-red-dark)"
      />
      <ReviewsContainer />
    </>
  );
}

export default Reviews;
