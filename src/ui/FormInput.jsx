import styles from "./FormInput.module.scss";

function FormInput({ type, id, name }) {
  return (
    <input type={type} id={id} name={name} className={styles.input}></input>
  );
}

export default FormInput;
