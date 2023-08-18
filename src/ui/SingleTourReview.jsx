import styles from "./SingleTourReview.module.scss";

function SingleTourReview({ review, name }) {
  return (
    <>
      <p className={styles.text}>{review}</p>
      <p className={styles.reviewer}>- {name}</p>
    </>
  );
}

export default SingleTourReview;
