import styles from "./TestField.module.scss";

function TestField({ label, children, htmlFor, error }) {
  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={htmlFor}>
          {label}
        </label>
      )}
      {children}
      {error && (
        <div role="alert" className={styles.error}>
          {error.message}
        </div>
      )}
    </div>
  );
}

export default TestField;
