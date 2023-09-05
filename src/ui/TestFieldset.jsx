import styles from "./TestFieldset.module.scss";

function TestFieldset({ children }) {
  return <fieldset className={styles.container}>{children}</fieldset>;
}

export default TestFieldset;
