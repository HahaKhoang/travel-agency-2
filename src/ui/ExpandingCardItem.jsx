import styles from "./ExpandingCardItem.module.scss";

function ExpandingCardItem({ curActive, onActive, img, text, num }) {
  const isOpen = num === curActive;

  function handleToggle() {
    onActive(num);
  }

  const active = `${isOpen ? styles.active : ""}`;
  const textActive = `${isOpen ? styles.textActive : ""}`;

  return (
    <div
      className={`${styles.panel} ${active}`}
      style={{
        backgroundImage: `url(${img})`,
      }}
      onClick={handleToggle}
    >
      <h3 className={textActive}>{text}</h3>
    </div>
  );
}

export default ExpandingCardItem;
