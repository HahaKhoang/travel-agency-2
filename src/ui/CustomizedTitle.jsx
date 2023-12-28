import styles from "./CustomizedTitle.module.scss";

function CustomizedTitle() {
  return (
    <div className={styles.container}>
      <p className={styles.header}>
        Tell us about your perfect trip and we'll help you make it come true
      </p>
      <p className={styles.text}>Here's how it works</p>
    </div>
  );
}

export default CustomizedTitle;
