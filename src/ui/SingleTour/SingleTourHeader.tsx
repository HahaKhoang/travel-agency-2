import styles from "./SingleTourHeader.module.scss";

function SingleTourHeader({ message }: { message: string }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{message}</h2>
    </div>
  );
}

export default SingleTourHeader;
