import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
import styles from "./VerticalSlider.module.scss";
import VerticalSliderItem from "./VerticalSliderItem";
import kyoto from "../../public/img/kyoto.jpg";
import fuji from "../../public/img/fuji.jpg";
import arashiyama from "../../public/img/arashiyama.jpg";
import VerticalSliderPicture from "./VerticalSliderPicture";
import { useState } from "react";

const data = [
  { name: "Hanbin", tour: "Explore Kyoto", color: "#e4dddd" },
  { name: "Dongwoon", tour: "Explore Fuji", color: "#bdbcbc" },
  { name: "Keanu", tour: "Explore Tokyo", color: "#7a7878" },
];

const images = [{ image: arashiyama }, { image: fuji }, { image: kyoto }];

function VerticalSlider() {
  const [activeImage, setActiveImage] = useState(0);
  const length = images.length;
  const maxSlide = images.length - 1;

  const nextSlide = () => {
    setActiveImage(activeImage === maxSlide ? 0 : activeImage + 1);
    // if (activeImage === null) setActiveImage(0);
    // else {
    //   setActiveImage(activeImage === maxSlide ? 0 : activeImage + 1);
    // }
    // if (activeImage === maxSlide) setActiveImage(0);
    // else {
    //   setActiveImage((curState) => curState++);
    // }
    console.log(activeImage);
  };

  const prevSlide = () => {
    setActiveImage(activeImage === 0 ? length - 1 : activeImage - 1);
  };

  //   const active = `activeImage === i ? transform: translateY(activeImage * 100) : ''`;

  // <div
  //   className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
  //   key={ind}
  // >
  //   {ind === activeImageNum && <img src={currentSlide.url} className="image" />}
  // </div>;

  // const goToSlide = function (slide) {
  //   slides.forEach(
  //     (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  //   );
  // };

  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        {data.map((el) => (
          <VerticalSliderItem
            name={el.name}
            tour={el.tour}
            key={el.name}
            color={el.color}
            image={el.image}
          />
        ))}
      </div>
      <div className={styles["right-container"]}>
        {images.map((el, i) => (
          <VerticalSliderPicture
            key={i}
            image={el.image}
            index={i}
            activeImage={activeImage}
          />
        ))}
      </div>
      <div className={styles["button-container"]}>
        <button className={styles["up-button"]} onClick={nextSlide}>
          <IoIosArrowRoundUp />
        </button>
        <button className={styles["down-button"]}>
          <IoIosArrowRoundDown />
        </button>
      </div>
    </div>
  );
}

export default VerticalSlider;
