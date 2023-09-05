import styles from "./TestFieldset.module.scss";

function TestFormRow({ label, children }) {
  return (
    <fieldset className={styles.container}>
      {label && <legend className={styles.legend}>{label}</legend>}
      <div className={styles.wrapper}>{children}</div>
    </fieldset>
  );
}

export default TestFormRow;
