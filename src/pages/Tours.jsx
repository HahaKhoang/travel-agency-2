import TourContainer from "../ui/TourContainer";
import TourHeader from "../ui/TourHeader";
import matchaDrink from "../../public/img/matchaDrink.jpg";
import sushi from "../../public/img/sushi.jpg";
import dango from "../../public/img/dango.jpg";
import ramen from "../../public/img/ramen.jpg";
import wagashi from "../../public/img/wagashi.jpg";
import rollercoaster from "../../public/img/rollercoaster.jpg";
import bungeejumping from "../../public/img/bungeejumping.jpg";
import rockclimbing from "../../public/img/rockclimbing.jpg";
import scubadiving from "../../public/img/scubadiving.jpg";
import skydiving from "../../public/img/skydiving.jpg";

const food = [
  {
    name: "Matcha Mania",
    amount: "5",
    location: "Kyoto, Japan",
    img: matchaDrink,
  },
  { name: "Seafood ", amount: "3", location: "Tokyo, Japan", img: sushi },
  { name: "Dessert ", amount: "7", location: "Kyoto, Japan", img: wagashi },
  { name: "Cute food", amount: "6", location: "Osaka, Japan", img: dango },
  { name: "Ramen", amount: "5", location: "Fukuoka, Japan", img: ramen },
];

const adventure = [
  {
    name: "Underwater",
    amount: "5",
    location: "Palawan, Philippines",
    img: scubadiving,
  },
  {
    name: "Rock Climbing",
    amount: "3",
    location: "Utah, America",
    img: rockclimbing,
  },
  {
    name: "Adrenaline Junkie",
    amount: "4",
    location: "Queenstown, New Zealand",
    img: bungeejumping,
  },
  {
    name: "Theme Park Lover",
    amount: "3",
    location: "Japan",
    img: rollercoaster,
  },
  {
    name: "Sky Diving",
    amount: "3",
    location: "Cape Town, South Africa",
    img: skydiving,
  },
];

function Tours() {
  return (
    <div>
      <TourContainer data={food} header="For foodies" />

      <TourContainer data={adventure} header="For adventure seekers" />

      <TourHeader text="Nature lovers" />
      <TourHeader text="Cultural connosseuirs" />
    </div>
  );
}

export default Tours;
