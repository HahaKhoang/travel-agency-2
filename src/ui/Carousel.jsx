import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kyoto from "../../public/img/kyoto.jpg";
import fuji from "../../public/img/fuji.jpg";
import arashiyama from "../../public/img/arashiyama.jpg";
import CarouselItem from "./CarouselItem";
import styles from "./Carousel.module.scss";

const data = [
  {
    name: "Hanbin",
    tour: "Explore Kyoto",
    image: arashiyama,
  },
  { name: "Dongwoon", tour: "Explore Fuji", image: fuji },
  { name: "Keanu", tour: "Explore Tokyo", image: kyoto },
  { name: "Tablo", tour: "Food Tour", image: arashiyama },
  { name: "Illa", tour: "Cultural Kyoto", image: kyoto },
];

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    accessibility: true,
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {data.map((el) => (
          <CarouselItem
            name={el.name}
            tour={el.tour}
            key={el.name}
            background={el.image}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
