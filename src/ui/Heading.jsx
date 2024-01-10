import styles from "./Heading.module.scss";

function Heading({ text1, text2, bgColor, fontColor }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: `${bgColor}`, color: `${fontColor}` }}
    >
      <h1 className={styles.header}>{text1}</h1>
      <p>{text2}</p>
    </div>
  );
}

export default Heading;
