import Slider from "react-slick";
import styles from "./SingleTourPicture.module.scss";
import VerticalSliderPicture from "./VerticalSliderPicture";
import fuji from "../../public/img/fuji.jpg";
import fushimi from "../../public/img/fushimi.jpg";
import tokyo from "../../public/img/tokyo.jpg";

const pictures = [
  {
    img: fuji,
    title: "Mt. Fuji",
    location: "Shizuoka, Japan",
    color: "var(--color-blue-light)",
  },
  {
    img: fushimi,
    title: "Fushimi Inari Shrine",
    location: "Kyoto, Japan",
    color: "grey",
  },
  {
    img: tokyo,
    title: "Shinjuku Crosswalk",
    location: "Tokyo, Japan",
    color: "var(--color-blue-light)",
  },
];

function SingleTourPicture() {
  const settings = {
    dots: true,
    dotsClass: `slick-dots ${styles.dots}`,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    accessibility: true,
    vertical: true,
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {pictures.map((el) => (
          <VerticalSliderPicture
            key={el.title}
            img={el.img}
            title={el.title}
            location={el.location}
            color={el.color}
          />
        ))}
      </Slider>
    </div>
  );
}

export default SingleTourPicture;
