import review1 from "../../public/img/review1.jpg";
import review2 from "../../public/img/review2.jpg";
import review3 from "../../public/img/review3.jpg";
import review4 from "../../public/img/review4.jpg";
import jk4 from "../../public/img/jk4.jpg";
import CarouselItem from "./CarouselItem";
import styles from "./Carousel.module.scss";
import { useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const reviews = [
  {
    name: "Jungkook",
    tour: "Seoul Searching",
    image: jk4,
  },
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
  const [activeIndex, setActiveIndex] = useState(0);
  const length = reviews.length - 1;

  function prevSlide() {
    setActiveIndex(activeIndex < 1 ? length : activeIndex - 1);
  }

  function nextSlide() {
    setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
  }

  return (
    <div className={styles.container}>
      <button className={styles["button-left"]} onClick={prevSlide}>
        <RiArrowLeftLine className={styles.button} />
      </button>
      <button className={styles["button-right"]} onClick={nextSlide}>
        <RiArrowRightLine className={styles.button} />
      </button>
      <div className={styles.dots}>
        {reviews.map((_, i) => {
          return (
            <span
              key={i}
              className={
                activeIndex === i
                  ? `${styles.dot} ${styles["active-dot"]}`
                  : `${styles.dot}`
              }
              onClick={() => {
                setActiveIndex(i);
              }}
            ></span>
          );
        })}
      </div>
      <div className={styles["reviews-container"]}>
        {reviews.map((el, i) => (
          <div
            className={styles.reviews}
            key={i}
            style={{
              transform: `translateX(${100 * (i - activeIndex)}%)`,
            }}
          >
            <CarouselItem name={el.name} tour={el.tour} image={el.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
