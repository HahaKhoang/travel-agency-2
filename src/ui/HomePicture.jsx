import styles from "./HomePicture.module.scss";
import tokyo from "../../public/img/tokyo.jpg";
import kyoto from "../../public/img/kyoto.jpg";
import fuji from "../../public/img/fuji.jpg";
import Slider from "react-slick";

function HomePicture() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    // autoplay: true,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <img src={tokyo} />
          <div className={styles.textDetails}>
            <p className={styles.title}>Title</p>
            <p className={styles.details}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              ullam quam cumque excepturi{" "}
            </p>
          </div>
        </div>
        <div className={styles.text}>
          <img src={tokyo} />
          <div className={styles.textDetails}>
            <p className={styles.title}>Title</p>
            <p className={styles.details}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              ullam quam cumque excepturi{" "}
            </p>
          </div>
        </div>
        <div className={styles.text}>
          <img src={tokyo} />
          <div className={styles.textDetails}>
            <p className={styles.title}>Title</p>
            <p className={styles.details}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              ullam quam cumque excepturi{" "}
            </p>
          </div>
        </div>
        <div className={styles.text}>
          <img src={tokyo} />
          <div className={styles.textDetails}>
            <p className={styles.title}>Title</p>
            <p className={styles.details}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              ullam quam cumque excepturi{" "}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.pictureContainer}>
        <Slider {...settings} className={styles.slider}>
          <img src={tokyo} className={styles.picture} />
          <img src={kyoto} className={styles.picture} />
          <img src={fuji} className={styles.picture} />
        </Slider>
      </div>
    </div>
  );
}

export default HomePicture;
