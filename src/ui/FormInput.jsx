import styles from "./FormInput.module.scss";

function FormInput({ type }) {
  return <input type={type} className={styles.input}></input>;
}

export default FormInput;
