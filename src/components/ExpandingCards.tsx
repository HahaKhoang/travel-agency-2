import styles from "./ExpandingCards.module.scss";
import culture from "../assets/img/website/culture.jpg";
import shopping from "../assets/img/website/shopping.jpg";
import nature from "../assets/img/website/nature.jpg";
import food from "../assets/img/website/food.jpg";
import nightlife from "../assets/img/website/nightlife.jpg";
import everything from "../assets/img/website/everything.jpg";
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
    link: "all-tours?type=culture",
  },
  {
    img: nature,
    text: "Nature",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
    icon: <RiLeafFill />,
    link: "all-tours?type=nature",
  },
  {
    img: shopping,
    text: "Shopping",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
    icon: <RiShoppingBag2Fill />,
    link: "all-tours?type=shopping",
  },
  {
    img: food,
    text: "Food",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
    icon: <RiRestaurantFill />,
    link: "all-tours?type=food",
  },
  {
    img: nightlife,
    text: "Nightlife",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
    icon: <RiGobletFill />,
    link: "all-tours?type=nightlife",
  },
  {
    img: everything,
    text: "Everything",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
    icon: <RiMagicFill />,
    link: "all-tours?type=everything",
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
