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

    // wrapperRef.current.style.transition = "1s";
    wrapperRef.current.style.top = "-70px";
  };

  useEffect(() => {
    setTimeout(() => {
      handleAnim();
    }, 1000);
  });

  return (
    <div className={styles.container}>
      <div className={styles.subheading}>
        <h3 className={styles["text-1"]}>We're here to help you </h3>
        <div className={styles["text-container"]}>
          <div ref={wrapperRef} className={styles["words-container"]}>
            <h3 className={styles["text-word"]}>{words[0]}</h3>
            <h3 className={styles["text-word"]}>{words[1]}</h3>
          </div>
        </div>
      </div>
      <h3 className={styles["text-2"]}> the way you want</h3>
    </div>
  );
};

export default Subheading;
