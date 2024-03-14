import styles from "./SingleTourReview.module.scss";

type SingleTourReviewProps = {
  review: string;
  name: string;
};

function SingleTourReview({ review, name }: SingleTourReviewProps) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{review}</p>
      <p className={styles.reviewer}>- {name}</p>
    </div>
  );
}

export default SingleTourReview;
