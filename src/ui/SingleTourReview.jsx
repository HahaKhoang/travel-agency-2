import styles from "./SingleTourReview.module.scss";

function SingleTourReview({ review, name }) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{review}</p>
      <p className={styles.reviewer}>- {name}</p>
    </div>
  );
}

export default SingleTourReview;
