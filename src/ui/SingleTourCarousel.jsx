import styles from "./SingleTourCarousel.module.scss";
import fuji from "../../public/img/japan/fuji.jpg";
import fushimi from "../../public/img/japan/fushimi.jpg";
import tokyo from "../../public/img/japan/tokyo.jpg";
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

function SingleTourCarousel({ carouselImages }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = pictures.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [activeIndex, length]);

  return (
    <div className={styles.container}>
      {pictures.map((el, i) => (
        <div
          className={styles["picture-container"]}
          key={i}
          style={{
            transform: `translateY(${100 * (i - activeIndex)}%)`,
            backgroundColor: `${el.color}`,
          }}
        >
          <div className={styles["picture-frame"]}>
            <img src={el.img} className={styles.picture} />
            <h1 className={styles.title}>{el.title}</h1>
            <p className={styles.location}>{el.location}</p>
          </div>
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

export default SingleTourCarousel;

{
  /* <div className={styles["picture-container"]}>
<div className={styles["picture-frame"]}>
  <img src={fuji} className={styles.picture} />
  <h1 className={styles.title}>Mt.Fuji</h1>
  <p className={styles.location}>Japan</p>
</div>
</div> */
}
