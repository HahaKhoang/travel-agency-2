import styles from "./Heading.module.scss";

function Heading({ text1, text2 }) {
  return (
    <div className={styles.container}>
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
}

export default Heading;
