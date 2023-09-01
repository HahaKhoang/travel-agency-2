import styles from "./FormSelect.module.scss";

function FormSelect({ id, name, children }) {
  return (
    <select id={id} name={name} className={styles.select}>
      {children}
    </select>
  );
}

export default FormSelect;
