import styles from "./SingleTourTestimonial.module.scss";
import SingleTourReview from "./SingleTourReview";
import { useState, useEffect } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const reviews = [
  {
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi repellat ipsa saepe hic cupiditate laboriosam autem accusantium ducimus tempore, odio soluta amet. Asperiores dicta dolores rerum quisquam iure, aperiam maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam, culpa assumenda est nulla recusandae? Animi error tempore eos veritatis, numquam voluptate incidunt enim fugit veniam omnis.",
    name: "Hanbin",
  },
  {
    review:
      "Dolor sit amet consectetur adipisicing elit. Excepturi repellat ipsa saepe hic cupiditate laboriosam autem accusantium ducimus tempore, odio soluta amet. Asperiores dicta dolores rerum quisquam iure, aperiam maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam, culpa assumenda est nulla recusandae? Animi error nulla atque possimus tempore eos veritatis, numquam voluptate incidunt enim fugit veniam omnis.",
    name: "Jungkook",
  },
  {
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi repellat ipsa saepe hic cupiditate laboriosam autem accusantium ducimus tempore, odio soluta amet. Asperiores dicta dolores rerum quisquam iure, aperiam maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam, culpa assumenda est nulla recusandae? Animi error numquam voluptate incidunt enim fugit veniam omnis.",
    name: "RM",
  },
  {
    review:
      "Excepturi repellat ipsa saepe hic cupiditate laboriosam autem accusantium ducimus tempore, odio soluta amet. Asperiores dicta dolores rerum quisquam iure, aperiam maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam, culpa assumenda est nulla recusandae? Animi error nulla atque possimus tempore eos veritatis, numquam voluptate incidunt enim fugit veniam omnis.",
    name: "Tablo",
  },
  {
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi repellat ipsa saepe hic cupiditate laboriosam autem accusantium ducimus tempore, odio soluta amet. Asperiores dicta dolores rerum quisquam iure, aperiam maiores! Officia numquam, culpa assumenda est nulla recusandae? Animi error nulla atque possimus tempore eos veritatis, numquam voluptate incidunt enim fugit veniam omnis.",
    name: "Keanu",
  },
];

function SingleTourTestimonial({ reviewImg }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = reviews.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [activeIndex, length]);

  function prevSlide() {
    setActiveIndex(activeIndex < 1 ? length : activeIndex - 1);
  }

  function nextSlide() {
    setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
  }

  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        <img src={reviewImg} className={styles.picture} />
      </div>
      <div className={styles["right-container"]}>
        <button className={styles["button-left"]} onClick={prevSlide}>
          <RiArrowLeftLine className={styles.button} />
        </button>
        <button className={styles["button-right"]} onClick={nextSlide}>
          <RiArrowRightLine className={styles.button} />
        </button>
        <div className={styles["reviews-container"]}>
          <h2 className={styles.header}>Reviews</h2>
          <div className={styles["reviews-slider"]}>
            {reviews.map((el, i) => (
              <div
                className={styles.reviews}
                key={i}
                style={{
                  transform: `translateX(${100 * (i - activeIndex)}%)`,
                }}
              >
                <SingleTourReview review={el.review} name={el.name} />
              </div>
            ))}
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default SingleTourTestimonial;
