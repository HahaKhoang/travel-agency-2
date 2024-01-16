import styles from "./CustomizedTitle.module.scss";

function CustomizedTitle() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Tell us about your perfect trip and we'll help you make it come true
      </h1>
      <h3 className={styles.text}>Here's how it works</h3>
    </div>
  );
}

export default CustomizedTitle;
