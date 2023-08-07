import styles from "./CarouselItem.module.scss";
import matcha from "../../public/img/matcha.jpg";

function CarouselItem({ name, tour, background }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.box}></div>
      <div className={styles.stripe}>
        <p className={styles.tour}>{tour}</p>
        <img src={matcha} className={styles.avatar} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, earum
          totam? Quam unde commodi inventore eaque quaerat delectus cumque
          quibusdam recusandae tenetur, libero harum quisquam nisi porro eum,
          rem veniam.
        </p>
        <p className={styles.name}>{name}</p>
        {/* <p>Seoul, South Korea</p> */}
      </div>
    </div>
  );
}

export default CarouselItem;
