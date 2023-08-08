import styles from "./ExpandingCardItem.module.scss";

function ExpandingCardItem({ curActive, onActive, img, text, num, desc }) {
  const isOpen = num === curActive;

  function handleToggle() {
    onActive(num);
  }

  const active = `${isOpen ? styles.active : ""}`;
  // const textActive = `${isOpen ? styles.textActive : ""}`;
  const textActive = `${isOpen ? styles.textActive : ""}`;
  // const boxActive = `${isOpen ? styles.boxActive : styles.box}`;

  return (
    <div
      className={`${styles.panel} ${active}`}
      style={{
        backgroundImage: `url(${img})`,
      }}
      onClick={handleToggle}
    >
      {/* <h3 className={textActive}>{text}</h3> */}
      <div className={`${textActive} ${styles.box}`}>
        <p className={styles.header}> {text}</p>
        <p>{desc}</p>
        <a className={styles.link}>&rarr; Read more</a>
      </div>
    </div>
  );
}

export default ExpandingCardItem;
