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
  const [clicked, setClicked] = useState(false);
  const maxSlide = images.length;

  function nextSlide() {
    if (activeImage === maxSlide - 1) {
      setActiveImage(0);
    } else {
      setActiveImage((prevState) => prevState + 1);
      setClicked(true);
    }
  }
  console.log("Next slide: " + activeImage, clicked);

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
            clicked={clicked}
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
