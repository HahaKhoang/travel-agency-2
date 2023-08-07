import styles from "./CarouselItem.module.scss";
import matcha from "../../public/img/matcha.jpg";

function CarouselItem() {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${matcha})` }}
    >
      <div className={styles.box}></div>
      <div className={styles.stripe}>
        <p>Exlore Kyoto</p>
        <img src={matcha} className={styles.avatar} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, earum
          totam? Quam unde commodi inventore eaque quaerat delectus cumque
          quibusdam recusandae tenetur, libero harum quisquam nisi porro eum,
          rem veniam.
        </p>
        <p>Hanbin</p>
        <p>Seoul, South Korea</p>
      </div>
    </div>
  );
}

export default CarouselItem;
