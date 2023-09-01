import styles from "./FormLabel.module.scss";

function FormLabel({ label }) {
  return <div className={styles.label}>{label}</div>;
}

export default FormLabel;
