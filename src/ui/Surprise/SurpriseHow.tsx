import styles from "./SurpriseHow.module.scss";
import jump from "../../assets/img/website/jump.jpg";
import HowToSteps from "../../components/HowToSteps";

import tent from "../../assets/img/website/tent.jpg";
import bicycle from "../../assets/img/website/bicycle.jpg";
import trolley from "../../assets/img/website/trolley.jpg";
import kayak from "../../assets/img/website/kayak.jpg";
import adventure from "../../assets/img/website/adventure.jpg";

function SurpriseHow() {
  return (
    <div className={styles.container}>
      <div className={styles.ready}>
        <div className={styles["text-container"]}>
          <h2 className={styles.header}>Ready to take the plunge?</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            commodi dolorem{" "}
          </p>
        </div>
        <div className={styles["picture-container"]}>
          <img src={jump} className={styles.picture} />
        </div>
      </div>
      <HowToSteps
        img1={bicycle}
        img1Alt="Bicycle leaning against a cute boutique"
        img2={tent}
        img2Alt="A tent at night"
        img3={trolley}
        img3Alt="A trolley going up the road"
        img4={kayak}
        img4Alt="A kayak in the water between mountains"
        img5={adventure}
        img5Alt="A backpack, mug, and boots resting during a hike"
        fontColor="black"
        direction="left"
        button={false}
        step1text1="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        suscipit"
        li1="Lorem ipsum dolor sit amet"
        li2="Lorem ipsum dolor sit amet"
        li3="Lorem ipsum dolor sit amet"
        step2text1="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        suscipit"
        step2text2="Lorem, ipsum dolor sit amet consectetur adipisicing"
        step3text1="Lorem, ipsum dolor sit amet consectetur adipisicing"
        step3text2="Lorem, ipsum dolor sit amet consectetur adipisicing"
        step4text1="Lorem, ipsum dolor sit amet consectetur adipisicing"
        step4text2="Lorem, ipsum dolor sit amet consectetur adipisicing"
        step5text1="Lorem, ipsum dolor sit amet consectetur adipisicing"
        step5text2="Lorem, ipsum dolor sit amet consectetur adipisicing"
      />
    </div>
  );
}

export default SurpriseHow;
