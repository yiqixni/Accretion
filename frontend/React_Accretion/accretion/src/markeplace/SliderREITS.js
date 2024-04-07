import React from "react";
import Slider from "react-slick";
import { useRef } from "react";

import { ReactComponent as LogoAlexandria } from './logo-alexandria.svg';
import { ReactComponent as LogoAMT } from './logo-american-tower.svg';
import { ReactComponent as LogoAvalon } from './logo-avalon-bay.svg';
import { ReactComponent as LogoBxp } from './logo-bxp.svg';
import { ReactComponent as LogoEquinix } from './logo-equinix.svg';
import { ReactComponent as LogoPrologis } from './logo-prologis.svg';
import { ReactComponent as LogoSimon } from './logo-simon-property.svg';

import './Marketplace.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderREITS() {
    const sliderRef = useRef(null);

    const handleLogoClick = (index) => {
        sliderRef.current.slickGoTo(index); // Move slider to the specified slide index
      };
  
    const settings = {
    className: "center", 
    centerMode: true, 
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,     
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,     
    touchMove: true, // Enable touch interactions
    touchThreshold: 10, // Threshold for touch swipe (in pixels)
    responsive: [
        {
          breakpoint: 769, // Screen width at which the settings will change (desktop)
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768, // Screen width at which the settings will change (mobile)
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  };
  return (
    <div className="slider">
      <Slider ref={sliderRef} {...settings}>
        
        <div className="slider-logo" onClick={() => handleLogoClick(0)}>
          <LogoBxp id="slider-logo-id"/>
        </div>
        
        <div className="slider-logo" onClick={() => handleLogoClick(1)}>
          <LogoAlexandria id="slider-logo-id"/>
        </div>
        
        <div className="slider-logo" onClick={() => handleLogoClick(2)}>
          <LogoAMT id="slider-logo-id"/>
        </div>
        
        <div className="slider-logo" onClick={() => handleLogoClick(3)}>
          <LogoAvalon id="slider-logo-id"/>
        </div>                
        
        <div className="slider-logo" onClick={() => handleLogoClick(4)}>
          <LogoPrologis id="slider-logo-id"/>
        </div>
        
        <div className="slider-logo" onClick={() => handleLogoClick(5)}>
          <LogoEquinix id="slider-logo-id"/>
        </div>

        <div className="slider-logo" onClick={() => handleLogoClick(6)}>
          <LogoSimon id="slider-logo-id"/>
        </div>
        
      </Slider>
    </div>
  );
}

