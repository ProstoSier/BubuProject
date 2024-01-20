import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import intro from '../Assets/intro/intro.jpg';
import './slider.css';
import { MdArrowForward } from "react-icons/md";



const SimpleSlider = () => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    fade: false,
    cssEase: 'linear',
    accessibility: true,
    nextArrow: <MdArrowForward/>,
    prevArrow: <MdArrowForward/>,
  };

  return (
    <>
    <Slider className='slider' {...settings}>
      <div className='slide'>
        <img className='slide__image' src={intro} alt="" />
      </div>
      <div className='slide'>
        <img src={intro} alt="" />
      </div>
      <div className='slide'>
        <img src={intro} alt="" />
      </div>
      <div className='slide'>
        <img src={intro} alt="" />
      </div>  
    </Slider>
    </>
  );
};

export default SimpleSlider;