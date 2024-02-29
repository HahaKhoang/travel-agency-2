import { useEffect, useRef, useState } from "react";
import styles from "./RotatingWords.module.scss";

const RotatingWords = () => {
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

      setWords([...firstElem.concat(copyWords)]);
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      handleAnim();
    }, 1000);
  });

  return (
    <div className={styles.container}>
      <div className={styles["rotating-words"]}>
        <h3 className={styles["static-text"]}>We're here to help you </h3>
        <div className={styles["text-container"]}>
          <div ref={wrapperRef} className={styles["words-container"]}>
            <p className={styles["text-word"]}>{words[0]}</p>
            <p className={styles["text-word"]}>{words[1]}</p>
          </div>
        </div>
      </div>
      <h3 className={styles["text-2"]}> the way you want</h3>
    </div>
  );
};

export default RotatingWords;
