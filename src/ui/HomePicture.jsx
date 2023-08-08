import styles from "./HomePicture.module.scss";
import tokyo from "../../public/img/tokyo.jpg";
import kyoto from "../../public/img/kyoto.jpg";
import fuji from "../../public/img/fuji.jpg";
import tea from "../../public/img/tea.jpg";
import onsen from "../../public/img/onsen.jpg";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function HomePicture() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    fade: true,
    autoplay: true,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <img src={tokyo} className={styles.icon} />
          <div className={styles.textDetails}>
            <p className={styles.title}>Bar hop in Tokyo</p>
            <p className={styles.details}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              ullam quam cumque excepturi{" "}
            </p>
          </div>
        </div>
        <div className={styles.text}>
          <img src={onsen} className={styles.icon} />
          <div className={styles.textDetails}>
            <p className={styles.title}>Relax in an onsen</p>
            <p className={styles.details}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              dolores quaerat cumque distinctio itaque a voluptas magni
            </p>
          </div>
        </div>
        <div className={styles.text}>
          <img src={fuji} className={styles.icon} />
          <div className={styles.textDetails}>
            <p className={styles.title}>Hike Mt. Fuji</p>
            <p className={styles.details}>
              A cumque aperiam illum dolor, explicabo quo repellat voluptates
              ipsa, provident exercitationem odio impedit. Eaque magnam
            </p>
          </div>
        </div>
        <div className={styles.text}>
          <img src={tea} className={styles.icon} />
          <div className={styles.textDetails}>
            <p className={styles.title}>Experience a tea ceremony</p>
            <p className={styles.details}>
              Debitis fuga, at numquam facere quisquam impedit velit architecto,
              doloremque perspiciatis accusamus maxime ipsa iure!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.pictureContainer}>
        <Slider {...settings}>
          <img src={tokyo} className={styles.picture} />
          <img src={kyoto} className={styles.picture} />
          <img src={fuji} className={styles.picture} />
        </Slider>
      </div>
    </div>
  );
}

export default HomePicture;
