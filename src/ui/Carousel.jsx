import Slider from "react-slick";
import review1 from "../../public/img/review1.jpg";
import review2 from "../../public/img/review2.jpg";
import review3 from "../../public/img/review3.jpg";
import review4 from "../../public/img/review4.jpg";
import CarouselItem from "./CarouselItem";
import styles from "./Carousel.module.scss";
import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const data = [
  {
    name: "Hanbin",
    tour: "Explore Kyoto",
    image: review1,
  },
  { name: "Dongwoon", tour: "Explore Fuji", image: review2 },
  { name: "Keanu", tour: "Explore Tokyo", image: review4 },
  { name: "Tablo", tour: "Food Tour", image: review3 },
];

function Carousel() {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    dotsClass: `slick-dots ${styles.dots}`,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    accessibility: true,
  };
  return (
    <div className={styles.container}>
      <Slider {...settings} ref={setSliderRef}>
        {data.map((el) => (
          <CarouselItem
            name={el.name}
            tour={el.tour}
            key={el.name}
            image={el.image}
          />
        ))}
      </Slider>
      <div>
        <button className={styles.left} onClick={sliderRef?.slickPrev}>
          <RiArrowLeftSLine />
        </button>
        <button className={styles.right} onClick={sliderRef?.slickNext}>
          <RiArrowRightSLine />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
