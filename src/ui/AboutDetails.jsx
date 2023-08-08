import kathy from "../../public/img/kathy.jpg";
import styles from "./AboutDetails.module.scss";

function AboutDetails() {
  return (
    <>
      {/* <p className={styles.header}>About me</p> */}
      <div className={styles.container}>
        <img src={kathy} className={styles.pic} />

        <div className={styles.description}>
          <p className={styles.header}>About me</p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque, iste mollitia accusamus itaque laborum nobis distinctio
            consequatur, suscipit at maiores, numquam laboriosam qui. At dolores
            id, incidunt ad voluptate hic?
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            dolore iure eius nihil pariatur dolor aliquam, accusantium odit
            laborum magni fugit at enim modi quas voluptas atque sequi
            recusandae quod!
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutDetails;
