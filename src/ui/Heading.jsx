import styles from "./Heading.module.scss";

function Heading({ text1, text2 }) {
  return (
    <div className={styles.container}>
      <h1>{text1}</h1>
      <p>{text2}</p>
    </div>
  );
}

export default Heading;
