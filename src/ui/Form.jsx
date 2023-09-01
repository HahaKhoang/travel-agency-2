import styles from "./Form.module.scss";

function Form({ children, bgColor }) {
  return (
    <div className={styles.container} style={{ backgroundColor: `${bgColor}` }}>
      <div className={styles["form-container"]}>
        {children}
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Form;
