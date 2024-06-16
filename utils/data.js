import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import people1 from "../app//assets/people1.png";
import blankPage from "../app/assets/blankPage.png";
import djmen from "../app/assets/image19.png";
import musicgirl from "../app/assets/image20.png";
import budweiser from "../app/assets/image4.png";
import girlinstadium from "../app/assets/image5.png";
import charism from "../app/assets/image6.png";
import blackisblack from "../app/assets/image7.png";
import people2 from "../app/assets/people2.png";
import people3 from "../app/assets/people3.png";
import people4 from "../app/assets/people4.png";
import people5 from "../app/assets/people5.png";

export const events = [
  { src: blankPage, name: "The blank Page" },
  { src: djmen, name: "The Dj Men" },
  { src: musicgirl, name: "The Music Liten girl Girl" },
  { src: budweiser, name: "The budweiser kane" },
  { src: girlinstadium, name: "The girl in the stadium" },
];

export const collections = [
  { src: blankPage, name: "The blank Page" },
  { src: charism, name: "The Chinese girl" },
  { src: musicgirl, name: "The Music Liten girl Girl" },
  { src: blackisblack, name: "The bill of the restaurent" },
  { src: girlinstadium, name: "The girl in the stadium" },
];

export const peoples = [
  { src: people1, name: "People1" },
  { src: people2, name: "People2" },
  { src: people3, name: "People3" },
  { src: people4, name: "People4" },
  { src: people5, name: "People5" },
];

export const settings = {
  infinite: true,
  speed: 100,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  slidesToShow: 1.6,
  slidesToScroll: 1,
};
