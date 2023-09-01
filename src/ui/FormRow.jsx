import styles from "./FormRow.module.scss";

function FormRow({ label, children }) {
  return (
    <div className={styles.row}>
      <label>{label}</label>
      {children}
    </div>
  );
}

export default FormRow;
