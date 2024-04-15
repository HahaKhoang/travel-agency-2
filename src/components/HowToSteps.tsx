import styles from "./HowToSteps.module.scss";
import { NavLink } from "react-router-dom";

type HowToProps = {
  bgColor?: string;
  fontColor: string;
  direction: "right" | "left";
  button: boolean;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  step1text1: string;
  step1text2?: string;
  step2text1: string;
  step2text2: string;
  step3text1: string;
  step3text2: string;
  step4text1: string;
  step4text2: string;
  step5text1: string;
  step5text2: string;
  li1?: string;
  li2?: string;
  li3?: string;
};

function HowToSteps(props: HowToProps) {
  return (
    <>
      <div
        className={styles[`container-1-2-${props.direction}`]}
        style={{
          backgroundColor: `${props.bgColor}`,
          color: `${props.fontColor}`,
        }}
      >
        <div className={styles[`step-1-${props.direction}`]}>
          <div className={styles["step-1-text-container"]}>
            <h2 className={styles.header}>Step 1</h2>
            <p className={styles.text}>{props.step1text1}</p>
            {!props.li1 ? (
              <p className={styles.text}>{props.step1text2}</p>
            ) : (
              <ul className={styles.text}>
                <li>{props.li1}</li>
                <li>{props.li2}</li>
                <li>{props.li3}</li>
              </ul>
            )}
            {props.button && (
              <NavLink to="booking" className={styles.button}>
                Go to Survey
              </NavLink>
            )}
          </div>
          <div className={styles["step-1-picture-container"]}>
            <img src={props.img1} className={styles.picture} />
          </div>
        </div>
        <div className={styles[`step-2-${props.direction}`]}>
          <div
            className={styles[`step-2-picture-container-${props.direction}`]}
          >
            <img src={props.img2} className={styles.picture} />
          </div>
          <div className={styles[`step-2-text-container-${props.direction}`]}>
            <h2 className={styles.header}>Step 2</h2>
            <p className={styles.text}>{props.step2text1}</p>
            <p className={styles.text}>{props.step2text2}</p>
          </div>
        </div>
      </div>

      <div
        className={styles[`container-3-5-${props.direction}`]}
        style={{
          backgroundColor: `${props.bgColor}`,
          color: `${props.fontColor}`,
        }}
      >
        <div className={styles[`step-3-${props.direction}`]}>
          <div className={styles["step-3-text-container"]}>
            <h2 className={styles.header}>Step 3</h2>
            <p className={styles.text}>{props.step3text1}</p>
            <p className={styles.text}>{props.step3text2}</p>
          </div>
          <div className={styles["step-3-picture-container"]}>
            <img src={props.img3} className={styles.picture} />
          </div>
        </div>
        <div className={styles[`step-4-${props.direction}`]}>
          <div className={styles["step-4-picture-container"]}>
            <img src={props.img4} className={styles.picture} />
          </div>
          <div className={styles["step-4-text-container"]}>
            <h2 className={styles.header}>Step 4</h2>
            <p className={styles.text}>{props.step4text1}</p>
            <p className={styles.text}>{props.step4text2}</p>
          </div>
        </div>
        <div className={styles[`step-5-${props.direction}`]}>
          <div className={styles["step-5-text-container"]}>
            <h2 className={styles.header}>Step 5</h2>
            <p className={styles.text}>{props.step5text1}</p>
            <p className={styles.text}>{props.step5text2}</p>
          </div>
          <div className={styles["step-5-picture-container"]}>
            <img src={props.img5} className={styles.picture} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HowToSteps;
