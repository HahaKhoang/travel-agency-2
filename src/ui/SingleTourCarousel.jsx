import styles from "./SingleTourCarousel.module.scss";
import VerticalSliderPicture from "./VerticalSliderPicture";
import fuji from "../../public/img/fuji.jpg";
import fushimi from "../../public/img/fushimi.jpg";
import tokyo from "../../public/img/tokyo.jpg";
import { useEffect, useState } from "react";

const pictures = [
  {
    img: fuji,
    title: "Mt. Fuji",
    location: "Shizuoka, Japan",
    color: "var(--color-blue-light)",
  },
  {
    img: fushimi,
    title: "Fushimi Inari Shrine",
    location: "Kyoto, Japan",
    color: "#e5e7eb",
  },
  {
    img: tokyo,
    title: "Shinjuku Crosswalk",
    location: "Tokyo, Japan",
    color: "var(--color-blue-light)",
  },
];

function SingleTourPicture() {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = pictures.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, length]);

  return (
    <div className={styles.container}>
      {pictures.map((el, i) => (
        <div
          key={i}
          className={
            activeIndex === i ? `${styles.active}` : `${styles.inactive}`
          }
        >
          <VerticalSliderPicture
            key={el.title}
            img={el.img}
            title={el.title}
            location={el.location}
            color={el.color}
          />
        </div>
      ))}
      <div className={styles.dots}>
        {pictures.map((_, i) => {
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
    </div>
  );
}

export default SingleTourPicture;
