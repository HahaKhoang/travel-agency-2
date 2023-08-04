import { useEffect, useRef, useState } from "react";
import styles from "./Subheading.module.scss";

const Subheading = () => {
  const [words, setWords] = useState([
    "travel",
    "explore",
    "relax",
    "play",
    "eat",
    "drink",
    "party",
  ]);

  const wrapperRef = useRef();

  const handleAnim = () => {
    setTimeout(() => {
      const copyWords = [...words];
      const firstElem = copyWords.splice(1);
      wrapperRef.current.style.transition = "none";
      wrapperRef.current.style.top = "0px";
      setWords([...firstElem.concat(copyWords)]);
    }, 300);

    wrapperRef.current.style.transition = "0.5s";
    wrapperRef.current.style.top = "-70px";
  };

  useEffect(() => {
    setTimeout(() => {
      handleAnim();
    }, 300);
  });

  return (
    <div className={styles.subheading}>
      <div>We're here to help you </div>
      <div className={styles["text-container"]}>
        <div ref={wrapperRef} className={styles["words-container"]}>
          <span className={styles["text-word"]}>{words[0]}</span>
          <span className={styles["text-word"]}>{words[1]}</span>
        </div>
      </div>
      <div> the way you want</div>
    </div>
  );
};

export default Subheading;
