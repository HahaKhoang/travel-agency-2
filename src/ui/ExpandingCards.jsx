import styles from "./ExpandingCards.module.scss";
import kyoto from "../../public/img/kyoto.jpg";
import fuji from "../../public/img/fuji.jpg";
import tokyo from "../../public/img/tokyo.jpg";
import arashiyama from "../../public/img/arashiyama.jpg";
import japaneseFood from "../../public/img/japaneseFood.jpg";

import { useState } from "react";
import ExpandingCardItem from "./ExpandingCardItem";

const tours = [
  {
    img: kyoto,
    text: "Explore Kyoto",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
  },
  {
    img: tokyo,
    text: "Explore Tokyo",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
  },
  {
    img: fuji,
    text: "Explore Fuji",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
  },
  {
    img: arashiyama,
    text: "Explore nature",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
  },
  {
    img: japaneseFood,
    text: "Eat your way through Japan",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facere aut dolore doloribus sequi. Soluta dolores ullam corporis, suscipit quidem repellat odit repellendus, enim nemo officia delectus blanditiis magnam illum.",
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
        ></ExpandingCardItem>
      ))}
    </div>
  );
}

export default ExpandingCards;
