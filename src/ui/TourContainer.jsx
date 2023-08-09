import TourHeader from "./TourHeader";
import TourCard from "./TourCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TourContainer.module.scss";

function TourContainer() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 1000,
    accessibility: true,
  };
  return (
    <>
      <TourHeader text="For foodies" />
      <div className={styles.container}>
        <Slider {...settings}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Slider>
      </div>
    </>
  );
}

export default TourContainer;
