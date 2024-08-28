import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/images/diadelpadrebanner.png";
import img2 from "../assets/images/promo.png";
import img3 from "../assets/images/banner2.jpg";

const Home = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 500,
    cssEase: "linear",
    adaptativeHeigth: true,

  };
  return (
    <main>
      <Slider {...settings} autoplay>
        <div>
          <img id="img1" src={img1} width="100%" alt="img1"></img>
        </div>
        <div>
          <img id="img2" src={img2} width="100%" alt="img2"></img>
        </div>
        <div>
          <img id="img3" src={img3} width="90%" alt="img3"></img>
        </div>
      </Slider>
    </main>
  );
};

export default Home;
