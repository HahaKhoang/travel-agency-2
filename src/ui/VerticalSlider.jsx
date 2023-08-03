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

  const transform = `translateY(-${activeImage * 100})`;

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
      <div className={styles["right-container"]} style={{ transform }}>
        {images.map((el, i) => (
          <VerticalSliderPicture key={i} image={el.image} />
        ))}
      </div>
      <div className={styles["button-container"]}>
        <button className={styles["up-button"]}>
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
