import styles from "./SurpriseCarousel.module.scss";
import jk1 from "../../public/img/jk1.jpg";
import jk2 from "../../public/img/jk2.jpg";
import jk3 from "../../public/img/jk3.jpg";
import jk4 from "../../public/img/jk4.jpg";
import jk5 from "../../public/img/jk5.jpg";
import jk6 from "../../public/img/jk6.jpg";
import jk7 from "../../public/img/jk7.jpg";
import jk8 from "../../public/img/jk8.jpg";
import { useEffect, useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const pictures = [
  { img: jk1, width: "50rem", height: "30rem" },
  { img: jk2, width: "30rem", height: "40rem" },
  { img: jk3, width: "50rem", height: "30rem" },
  { img: jk4, width: "30rem", height: "40rem" },
  { img: jk5, width: "50rem", height: "30rem" },
  { img: jk6, width: "30rem", height: "40rem" },
  { img: jk7, width: "50rem", height: "30rem" },
  { img: jk8, width: "30rem", height: "40rem" },
];

function SurpriseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = pictures.length - 1;

  function prevSlide() {
    setActiveIndex(activeIndex < 1 ? length : activeIndex - 1);
  }

  function nextSlide() {
    setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
  }

  return (
    <>
      <div className={styles.header}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores,
        modi totam? Optio sit nostrum delectus ut, recusandae accusantium eum
        deleniti aperiam eligendi vel quisquam vero dolores ullam. Magni,
        aperiam animi!
      </div>
      <div className={styles.container}>
        {pictures.map((el, i) => (
          <div
            className={styles["picture-container"]}
            key={i}
            style={{ transform: `translateX(${100 * (i - activeIndex)}%)` }}
          >
            <div
              className={styles["picture-frame"]}
              style={{
                width: `${el.width}`,
                height: `${el.height}`,
              }}
            >
              <img src={el.img} className={styles.picture} />
            </div>
          </div>
        ))}
        <button className={styles["button-left"]} onClick={prevSlide}>
          <RiArrowLeftLine className={styles.button} />
        </button>
        <button className={styles["button-right"]} onClick={nextSlide}>
          <RiArrowRightLine className={styles.button} />
        </button>
      </div>
    </>
  );
}

export default SurpriseCarousel;

// {pictures.map((el, i) => (
//   <div
//     className={styles["picture-container"]}
//     key={i}
//     style={{
//       transform: `translateX(${100 * (i - activeIndex)}%)`,
//       width: `${el.width}`,
//       height: `${el.height}`,
//     }}
//   >
//     <div className={styles["pictures"]}>
//       <img src={el.img} className={styles.picture} />
//     </div>
//   </div>
// ))}

{
  /* <div className={styles["picture-container"]}>
        <div
          className={styles["picture-frame"]}
          style={{ width: "30rem", height: "20rem" }}
        >
          <img src={jk1} className={styles.picture} />
        </div>
      </div>
      <div className={styles["picture-container"]}>
        <div
          className={styles["picture-frame"]}
          style={{ width: "20rem", height: "40rem" }}
        >
          <img src={jk2} className={styles.picture} />
        </div>
      </div> */
}
