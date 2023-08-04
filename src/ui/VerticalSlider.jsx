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
  const maxSlide = data.length;
  const [activeCustomer, setActiveCustomer] = useState(maxSlide);
  const [clickedDown, setClickedDown] = useState(false);

  function changeSlide(direction) {
    if (direction === "down") {
      if (activeCustomer === maxSlide - 1) {
        setActiveCustomer(maxSlide);
      } else {
        setActiveCustomer((prevState) => prevState - 1);
      }
    }
    setClickedDown(true);
  }
  console.log(activeCustomer);

  // const slideDown = clickedDown
  //   ? `translateY(${100 * (i - activeCustomer)}%)`
  //   : "";

  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        {data.map((el, i) => (
          <div
            key={el.name}
            style={{
              backgroundColor: `${el.color}`,
              transform: clickedDown
                ? `translateY(${100 * (i - activeCustomer)}%)`
                : "",
            }}
          >
            <h1>{el.name}</h1>
            <p>{el.tour}</p>
          </div>
        ))}
      </div>
      <div className={styles["right-container"]}></div>
      <div className={styles["button-container"]}>
        <button className={styles["up-button"]}>
          <IoIosArrowRoundUp />
        </button>
        <button
          className={styles["down-button"]}
          onClick={() => changeSlide("down")}
        >
          <IoIosArrowRoundDown />
        </button>
      </div>
    </div>
  );
}

export default VerticalSlider;
