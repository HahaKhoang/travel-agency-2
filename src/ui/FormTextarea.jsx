import styles from "./FormTextarea.module.scss";

function FormTextarea({ id, rows, name }) {
  return (
    <textarea
      id={id}
      rows={rows}
      name={name}
      className={styles.textarea}
    ></textarea>
  );
}

export default FormTextarea;
