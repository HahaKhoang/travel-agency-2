import styles from "./CustomizedTitle.module.scss";

function CustomizedTitle() {
  return (
    <div className={styles.container}>
      <h2 className={styles.text}>
        Tell us about your perfect trip and we'll help you make it come true
      </h2>
    </div>
  );
}

export default CustomizedTitle;
