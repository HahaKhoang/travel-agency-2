import Banner from "../ui/Banner";
import mountain from "../../public/img/mountain.jpg";
import InspirationContainer from "../ui/InspirationContainer";
import bi1 from "../../public/img/bi1.jpg";
import bi2 from "../../public/img/bi2.jpg";
import bi3 from "../../public/img/bi3.jpg";
import bi4 from "../../public/img/bi4.jpg";
import bi5 from "../../public/img/bi5.jpg";
import bi6 from "../../public/img/bi6.jpg";
import bi7 from "../../public/img/bi7.jpg";
import bi8 from "../../public/img/bi8.jpg";
import bi9 from "../../public/img/bi9.jpg";
import bi10 from "../../public/img/bi10.jpg";

const bi = [
  { name: "Matcha Mania", location: "Kyoto, Japan", img: bi1 },
  { name: "Climb Mt. Fuji", location: "Shizuoka, Japan", img: bi2 },
  { name: "Seoul Searching", location: "Seoul, Korea", img: bi3 },
  { name: "Seafood Galore", location: "Busan, Korea", img: bi4 },
  { name: "Ghibli Lover", location: "Japan", img: bi5 },
  { name: "Swedish Fika", location: "Stockholm, Sweden", img: bi6 },
  { name: "Fantastic Fjords", location: "Norway", img: bi7 },
  { name: "Adrenaline Junkie", location: "Queenstown, New Zealand", img: bi8 },
  { name: "Tropical Paradise", location: "Costa Rica", img: bi9 },
  { name: "Safari", location: "South Africa", img: bi10 },
];

function Inspiration() {
  return (
    <div>
      <Banner img={mountain} text="Looking for some inspiration?" />
      <InspirationContainer data={bi} />
    </div>
  );
}

export default Inspiration;
