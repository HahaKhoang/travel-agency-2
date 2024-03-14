import styles from "./SingleTourLargePicture.module.scss";

type SingleTourLargePictureProps = {
  imageBG: string;
  imageHeader: string;
  imageText: string;
};

function SingleTourLargePicture({
  imageBG,
  imageHeader,
  imageText,
}: SingleTourLargePictureProps) {
  return (
    <div className={styles.container}>
      <img src={imageBG} className={styles.picture} />
      <h1 className={styles.header}>{imageHeader}</h1>
      <p className={styles.text}>{imageText}</p>
    </div>
  );
}

export default SingleTourLargePicture;
