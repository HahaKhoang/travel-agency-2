import styles from "./CarouselItem.module.scss";

type CarouselItemProps = {
  name: string;
  tour: string;
  image: string;
  alt: string;
};

function CarouselItem({ name, tour, image, alt }: CarouselItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        <img src={image} className={styles.picture} alt={alt} />
      </div>
      <div className={styles["right-container"]}>
        <div className={styles["text-container"]}>
          <h3 className={styles.tour}>{tour}</h3>
          <p className={styles.review}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet error
            fugiat aperiam temporibus non nobis vero earum! Sint beatae facilis
            perferendis vel voluptas optio aut molestias nostrum dolor,
            accusamus itaque.
          </p>
          <p className={styles.name}>{name}</p>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
