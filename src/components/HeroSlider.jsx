import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Slider from "react-slick";
import imagen from "../assets/carousel1.jpg";
// import imagen2 from "../assets/carousel2.jpg";

import "../styles/HeroSlider.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="slider_img"></div>
          <div className="slider_opacity"></div>
          <div className="slider_center">
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              omnis saepe, vitae sunt sequi velit!
            </p>
            <button className="slider_button">Trabajemos juntos</button>
          </div>
        </div>
        <div>
          <div className="slider_img"></div>
          <div className="slider_opacity"></div>
          <div className="slider_center">
            <h2>Lorem ipsum dolor sit.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
            <button className="slider_button">Clientes</button>
            <button className="slider_button">Reseñas</button>
          </div>
        </div>
        {/* <div>
          <img src={imagen2} alt="" className="slider_img" />
          <div className="slider_opacity"></div>
          <div className="slider_center_2">
            <h2>Hola que tal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              omnis saepe, vitae sunt sequi velit!
            </p>
            <button className="slider_button">Trabajemos juntos</button>
          </div>
        </div> */}
      </Slider>
    );
  }
}
