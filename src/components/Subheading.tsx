import styles from "./Subheading.module.scss";

type SubheadingProps = {
  h1: string;
  h3?: string;
};

function Subheading({ h1, h3 }: SubheadingProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{h1}</h1>
      <h3 className={styles.text}>{h3}</h3>
    </div>
  );
}

export default Subheading;
