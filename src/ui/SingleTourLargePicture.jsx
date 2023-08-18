import styles from "./SingleTourLargePicture.module.scss";
import arashiyama from "../../public/img/arashiyama.jpg";

function SingleTourLargePicture() {
  return (
    <div className={styles.container}>
      <img src={arashiyama} className={styles.picture} />
      <h1 className={styles.header}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </h1>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non doloribus
        nobis recusandae provident. Aperiam tempora laborum deserunt hic. Ullam
        illo possimus eveniet. Expedita ab, quibusdam corrupti ipsum deleniti
        quaerat quasi!
      </p>
    </div>
  );
}

export default SingleTourLargePicture;
