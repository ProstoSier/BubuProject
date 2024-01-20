import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdArrowForward } from "react-icons/md";
import anex from '../Assets/brends/anex.svg';
import bebivita from '../Assets/brends/bebivita.svg';
import hipp from '../Assets/brends/hipp.svg';
import huggies from '../Assets/brends/huggies.svg';
import lego from '../Assets/brends/lego.svg';
import pampers from '../Assets/brends/pampers.svg';
import playdoh from '../Assets/brends/playdoh.svg';
import CardBrend from '../CardBrend/CardBrend';

const SliderBrends = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7, 
        prevArrow: <MdArrowForward id="shares__prev"/>, 
        nextArrow: <MdArrowForward id="shares__next"/>, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
              {
                breakpoint: 765,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  initialSlide: 2,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              }
        ]

    };

    const brends = [
        {
            id: 1,
            name: playdoh,
            img: playdoh,
        },
        {
            id: 2,
            name: huggies,
            img: huggies,
        },
        {
            id: 3,
            name: hipp,
            img: hipp,
        },
        {
            id: 4,
            name: pampers,
            img: pampers,
        },
        {
            id: 5,
            name: anex,
            img: anex,
        },
        {
            id: 6,
            name: lego,
            img: lego,
        },
        {
            id: 7,
            name: bebivita,
            img: bebivita,
        },
        {
            id: 8,
            name: playdoh,
            img: playdoh,
        },
        {
            id: 9,
            name: huggies,
            img: huggies,
        },
        {
            id: 9,
            name: hipp,
            img: hipp,
        },
    ]

    return (
        <Slider sliderId={'slider2'} {...settings} >
          {brends.map((brend) => (
            <CardBrend key={brend.id} brend={brend} />
          ))}
        </Slider>
    );
}

export default SliderBrends;