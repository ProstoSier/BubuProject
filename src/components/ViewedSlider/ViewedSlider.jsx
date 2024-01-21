import CardProduct from '../CardProduct/CardProduct';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdArrowForward } from "react-icons/md";
import image01 from '../Assets/card/img-card01.png';
import image02 from '../Assets/card/img-card02.png';
import image03 from '../Assets/card/img-card03.png';
import image04 from '../Assets/card/img-card04.png';
import image05 from '../Assets/card/img-card05.png';
import './viewedSlider.css';

const ViewSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, 
        prevArrow: <MdArrowForward id="shares__prev"/>, 
        nextArrow: <MdArrowForward id="shares__next"/>, 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 765,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          }
        ]
      };
    
      const product = [
        {
            id: 1,
            name: 'Коляска 2в1 Anex M/Type Dune mt-01Q',
            price: '',
            oldPrice: '6000 грн',
            newPrice: '5000 грн',
            img: image01,
        },
        {
            id: 2,
            name: 'Іграшка-головоломка Same Toy IQ Ball Cube',
            price: '',
            oldPrice: '300 грн',
            newPrice: '200 грн',
            img: image02,
        },
        {
            id: 3,
            name: 'Пляшечка 130 мл',
            price: '100 грн',
            oldPrice: '',
            newPrice: '',
            img: image03,
        },
        {
            id: 4,
            name: 'Автокрісло Maxi-Cosi Citi Concrete grey',
            price: '4 300 грн',
            oldPrice: '',
            newPrice: '',
            img: image04,
        },
        {
            id: 5,
            name: 'Суміш молочна суха Nutrilon для...',
            price: '',
            oldPrice: '350 грн',
            newPrice: '300 грн',
            img: image05,
        },
        {
          id: 1,
          name: 'Коляска 2в1 Anex M/Type Dune mt-01Q',
          price: '',
          oldPrice: '6000 грн',
          newPrice: '5000 грн',
          img: image01,
      },
      {
          id: 2,
          name: 'Іграшка-головоломка Same Toy IQ Ball Cube',
          price: '',
          oldPrice: '300 грн',
          newPrice: '200 грн',
          img: image02,
      },
      {
          id: 3,
          name: 'Пляшечка 130 мл',
          price: '100 грн',
          oldPrice: '',
          newPrice: '',
          img: image03,
      },
      {
          id: 4,
          name: 'Автокрісло Maxi-Cosi Citi Concrete grey',
          price: '4 300 грн',
          oldPrice: '',
          newPrice: '',
          img: image04,
      },
      {
          id: 5,
          name: 'Суміш молочна суха Nutrilon для...',
          price: '',
          oldPrice: '350 грн',
          newPrice: '300 грн',
          img: image05,
      },
      ]

    return (
        <Slider sliderId={'slider2'} {...settings} >
          {product.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </Slider>
    )
}

export default ViewSlider;