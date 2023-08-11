import styles from "./FeaturedHeading.module.scss";

function FeaturedHeading() {
  return (
    <div className={styles.container}>
      <p>Can't decide where to go next?</p>
      <p>Check out our featured country</p>
    </div>
  );
}

export default FeaturedHeading;
