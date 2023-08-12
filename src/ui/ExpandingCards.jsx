import styles from "./ExpandingCards.module.scss";
import culture from "../../public/img/culture.jpg";
import shopping from "../../public/img/shopping.jpg";
import nature from "../../public/img/nature.jpg";
import food from "../../public/img/food.jpg";
import nightlife from "../../public/img/nightlife.jpg";
import { useState } from "react";
import ExpandingCardItem from "./ExpandingCardItem";
import {
  RiBankFill,
  RiGobletFill,
  RiLeafFill,
  RiRestaurantFill,
  RiShoppingBag2Fill,
} from "react-icons/ri";

const tours = [
  {
    img: culture,
    text: "Cultural",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
    icon: <RiBankFill />,
  },
  {
    img: nature,
    text: "Nature",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
    icon: <RiLeafFill />,
  },
  {
    img: shopping,
    text: "Shopping",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
    icon: <RiShoppingBag2Fill />,
  },
  {
    img: food,
    text: "Foodie",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
    icon: <RiRestaurantFill />,
  },
  {
    img: nightlife,
    text: "Nightlife",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
    icon: <RiGobletFill />,
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
        ></ExpandingCardItem>
      ))}
    </div>
  );
}

export default ExpandingCards;
