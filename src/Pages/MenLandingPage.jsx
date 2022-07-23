import React from "react";
import Slider from "react-slick";
import "../Styled/LandingPage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import videoBg from "../assets/videoBg.mp4"

const MenLandingPage = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 3000,
    vertical: true,
  
  };
  return (
    <Slider {...settings}>
      <div className="slide">
          <video src={videoBg} autoPlay loop muted/>

      </div>
      <div className="slide">
        <img
          src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-new/subhome-xmedia-28-02//w/1920/IMAGE-landscape-fill-ebca4191-db81-4df3-9f7e-4608fe6316f6-default_0.jpg?ts=1657819304984"
          alt=""
        />
      </div>
      <div className="slide">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/523/666/322/top-fashion-male-models-marlon-teixeira-model-beach-wallpaper-preview.jpg"
          alt=""
        />
      </div>
      <div className="slide">
        <img
          src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-new/subhome-xmedia-28-03//w/1920/IMAGE-landscape-fill-dfef3e6a-2e27-4ea7-b049-238695831147-default_0.jpg?ts=1657819076668"
          alt=""
        />
      </div>
      <div className="slide">
        <img
          src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-join-life/subhome-xmedia-28//w/1920/IMAGE-landscape-fill-2c250f47-8ed1-46ee-84b8-4a528eed7c43-default_0.jpg?ts=1657818038247"
          alt=""
        />
      </div>
      <div className="slide">
        <div className="men_footer">
          <div className="newsletter">
            <p>JOIN OUR NEWSLETTER</p>
            <p>
              <a href="#">INSTAGRAM</a>
              <a href="#">FACEBOOK</a>
              <a href="#">TWITTER</a>
              <a href="#">PINTEREST</a>
              <a href="#">YOUTUBE</a>
              <a href="#">SPOTIFY</a>
            </p>
          </div>
          <div className="zara_address">
            <p>NAME AND ADDRESS OF THE MANUFACTURER</p>
            <p>INDUSTRIA DE DISENO TEXTILE, S.A.(INDITEX,S.A.)</p>
            <p>
              AVENIDA DE LA DIPUTACION,EDIFICIO INDITEX,15143,ARTEIXO (A
              CORUNA), SPAIN
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default MenLandingPage;
