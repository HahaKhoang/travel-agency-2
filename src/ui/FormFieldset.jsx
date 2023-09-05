import styles from "./FormFieldset.module.scss";

function FormFieldset({ children }) {
  return <fieldset className={styles.container}>{children}</fieldset>;
}

export default FormFieldset;
