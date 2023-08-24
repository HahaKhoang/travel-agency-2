import styles from "./ExpandingCards.module.scss";
import culture from "../../public/img/website/culture.jpg";
import shopping from "../../public/img/website/shopping.jpg";
import nature from "../../public/img/website/nature.jpg";
import food from "../../public/img/website/food.jpg";
import nightlife from "../../public/img/website/nightlife.jpg";
import everything from "../../public/img/website/everything.jpg";
import { useState } from "react";
import ExpandingCardItem from "./ExpandingCardItem";
import {
  RiBankFill,
  RiGobletFill,
  RiLeafFill,
  RiMagicFill,
  RiRestaurantFill,
  RiShoppingBag2Fill,
} from "react-icons/ri";

const tours = [
  {
    img: culture,
    text: "Culture",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
    icon: <RiBankFill />,
    link: "tours?type=culture",
  },
  {
    img: nature,
    text: "Nature",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
    icon: <RiLeafFill />,
    link: "tours?type=nature",
  },
  {
    img: shopping,
    text: "Shopping",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
    icon: <RiShoppingBag2Fill />,
    link: "tours?type=shopping",
  },
  {
    img: food,
    text: "Food",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
    icon: <RiRestaurantFill />,
    link: "tours?type=food",
  },
  {
    img: nightlife,
    text: "Nightlife",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
    icon: <RiGobletFill />,
    link: "tours?type=nightlife",
  },
  {
    img: everything,
    text: "Everything",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
    icon: <RiMagicFill />,
    link: "tours?type=all",
  },
];

function ExpandingCards() {
  const [curActive, setCurActive] = useState(0);

  return (
    <div className={styles.container}>
      {tours.map((el, i) => (
        <ExpandingCardItem
          img={el.img}
          text={el.text}
          key={el.text}
          num={i}
          desc={el.desc}
          curActive={curActive}
          onActive={setCurActive}
          icon={el.icon}
          link={el.link}
        ></ExpandingCardItem>
      ))}
    </div>
  );
}

export default ExpandingCards;
