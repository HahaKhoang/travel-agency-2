import { useState } from "react";
import styles from "./ScrollToTop.module.scss";
import { RiArrowUpLine } from "react-icons/ri";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className={styles.button}
      style={{ display: visible ? "flex" : "none" }}
    >
      <RiArrowUpLine
        onClick={scrollToTop}
        className={styles.icon}
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
}

export default ScrollToTop;
