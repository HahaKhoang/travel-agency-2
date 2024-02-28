import styles from "./ReviewsContainer.module.scss";

function ReviewsContainer() {
  return (
    <div className={styles.container}>
      <div className={styles["review-container"]}>
        <p className={styles.review}>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          tempora rerum natus molestiae quis ullam suscipit beatae commodi, odit
          voluptatum, quia incidunt at, cupiditate dolore odio accusantium
          voluptatibus impedit. Labore."
        </p>
        <p className={styles.name}>- Cha Eunwoo</p>
      </div>
      <div className={styles["review-container"]}>
        <p className={styles.review}>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          praesentium dolorum illo ullam vitae quidem nam necessitatibus,
          delectus adipisci hic assumenda facilis nostrum expedita odit iure,
          error soluta, officiis amet."
        </p>
        <p className={styles.name}>- Jungkook</p>
      </div>
      <div className={styles["review-container"]}>
        <p className={styles.review}>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          perferendis cupiditate quasi minima est similique, atque aspernatur
          eaque architecto velit laboriosam, incidunt doloremque dignissimos
          quas ullam error libero pariatur dolor!"
        </p>
        <p className={styles.name}>- Park Seojoon</p>
      </div>
      <div className={styles["review-container"]}>
        <p className={styles.review}>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          tempora rerum natus molestiae quis ullam suscipit beatae commodi, odit
          voluptatum, quia incidunt at, cupiditate dolore odio accusantium
          voluptatibus impedit. Labore."
        </p>
        <p className={styles.name}>- Cha Eunwoo</p>
      </div>
      <div className={styles["review-container"]}>
        <p className={styles.review}>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          praesentium dolorum illo ullam vitae quidem nam necessitatibus,
          delectus adipisci hic assumenda facilis nostrum expedita odit iure,
          error soluta, officiis amet."
        </p>
        <p className={styles.name}>- Jungkook</p>
      </div>
      <div className={styles["review-container"]}>
        <p className={styles.review}>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          perferendis cupiditate quasi minima est similique, atque aspernatur
          eaque architecto velit laboriosam, incidunt doloremque dignissimos
          quas ullam error libero pariatur dolor!"
        </p>
        <p className={styles.name}>- Park Seojoon</p>
      </div>
    </div>
  );
}

export default ReviewsContainer;
