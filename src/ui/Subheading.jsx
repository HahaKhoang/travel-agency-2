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
      <div className={styles.subheading}>
        <p className={styles["static-text"]}>We're here to help you </p>
        <div className={styles["text-container"]}>
          <div ref={wrapperRef} className={styles["words-container"]}>
            <p className={styles["text-word"]}>{words[0]}</p>
            <p className={styles["text-word"]}>{words[1]}</p>
          </div>
        </div>
      </div>
      <p className={styles["text-2"]}> the way you want</p>
    </div>
  );
};

export default Subheading;
