import styles from "./Form.module.scss";

function Form({ children, bgColor, fontColor }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: `${bgColor}`, color: `${fontColor}` }}
    >
      <div className={styles["form-container"]}>{children}</div>
    </div>
  );
}

export default Form;
