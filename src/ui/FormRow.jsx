import styles from "./FormRow.module.scss";

function FormRow({ label, htmlFor, children }) {
  return (
    <div className={styles.row}>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  );
}

export default FormRow;
