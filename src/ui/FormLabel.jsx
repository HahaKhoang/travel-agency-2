import styles from "./FormLabel.module.scss";

function FormLabel({ label, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {label}
    </label>
  );
}

export default FormLabel;
