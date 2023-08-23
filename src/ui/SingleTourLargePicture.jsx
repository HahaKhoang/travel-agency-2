import styles from "./SingleTourLargePicture.module.scss";

function SingleTourLargePicture({ imageBG, imageHeader, imageText }) {
  return (
    <div className={styles.container}>
      <img src={imageBG} className={styles.picture} />
      <h1 className={styles.header}>{imageHeader}</h1>
      <p className={styles.text}>{imageText}</p>
    </div>
  );
}

export default SingleTourLargePicture;
