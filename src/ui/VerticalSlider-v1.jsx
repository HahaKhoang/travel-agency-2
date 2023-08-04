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
  const maxSlide = images.length;
  const [activeImage, setActiveImage] = useState(0);
  const [activeCustomer, setActiveCustomer] = useState(maxSlide);
  const [clickedUp, setClickedUp] = useState(false);
  const [clickedDown, setClickedDown] = useState(false);

  // function nextSlide() {
  //   if (activeImage === maxSlide - 1) {
  //     setActiveImage(0);
  //   } else {
  //     setActiveImage((prevState) => prevState + 1);
  //     setClickedUp(true);
  //   }
  // }
  // console.log("Next slide: " + activeImage, clickedUp);

  // function prevSlide() {
  //   if (activeCustomer === maxSlide - 1) {
  //     setActiveCustomer(0);
  //   } else {
  //     setActiveCustomer((prevState) => prevState + 1);
  //     setClickedDown(true);
  //   }
  // }

  function changeSlide(direction) {
    if (direction === "up") {
      if (activeImage === maxSlide - 1) {
        setActiveImage(0);
      } else {
        setActiveImage((prevState) => prevState + 1);
        setActiveCustomer((prevState) => prevState - 1);
        setClickedDown(true);
        setClickedUp(true);
      }
    }

    if (direction === "down") {
      if (activeCustomer === maxSlide - 1) {
        setActiveCustomer(0);
      } else {
        setActiveCustomer((prevState) => prevState + 1);
        setClickedDown(true);
      }
    }
  }
  console.log(
    "Prev slide: " + "Active Customer: " + activeCustomer,
    clickedDown
  );

  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        {data.map((el, i) => (
          <VerticalSliderItem
            name={el.name}
            tour={el.tour}
            key={el.name}
            color={el.color}
            image={el.image}
            clicked={clickedDown}
            index={i}
            activeCustomer={activeCustomer}
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
            clicked={clickedUp}
          />
        ))}
      </div>
      <div className={styles["button-container"]}>
        <button
          className={styles["up-button"]}
          onClick={() => changeSlide("up")}
        >
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
