import styles from "./Carousel.module.scss";
import hanbok from "../assets/img/korea/hanbok.jpg";
import kiyomizu from "../assets/img/japan/kiyomizu.jpg";
import fuji from "../assets/img/japan/fuji.jpg";
import tokyo from "../assets/img/japan/tokyo.jpg";
import japaneseFood from "../assets/img/japan/japaneseFood.jpg";
import CarouselItem from "./CarouselItem";
import { useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const reviews = [
  {
    name: "Jungkook",
    tour: "Seoul Searching",
    image: hanbok,
    alt: "4 women wearing traditional korean hanbok",
  },
  {
    name: "Hanbin",
    tour: "Explore Kyoto",
    image: kiyomizu,
    alt: "2 women wearing traditional japanese yukata in front of Kiyomizu temple",
  },
  {
    name: "Dongwoon",
    tour: "Explore Fuji",
    image: fuji,
    alt: "Mt. Fuji with cherry blossoms in the foreground",
  },
  { name: "Keanu", tour: "Explore Tokyo", image: tokyo, alt: "Tokyo at night" },
  {
    name: "Tablo",
    tour: "Food Tour",
    image: japaneseFood,
    alt: "Traditional Japanese meal",
  },
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
      <button
        className={styles["button-left"]}
        onClick={prevSlide}
        aria-label="prev button"
      >
        <RiArrowLeftLine className={styles.button} />
      </button>
      <button
        className={styles["button-right"]}
        onClick={nextSlide}
        aria-label="next button"
      >
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
            <CarouselItem
              name={el.name}
              tour={el.tour}
              image={el.image}
              alt={el.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
