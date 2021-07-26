import React from 'react'
import Slider from "react-slick";
import Image1 from '../../img/image_1.jpg';
import Image2 from '../../img/image_2.jpg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src={Image1} alt="" />
          </div>
          <div>
            <img src={Image2} alt="" />
          </div>
          <div>
            <img src={Image1} alt="" />
          </div>
          <div>
            <img src={Image2} alt="" />
          </div>
          <div>
            <img src={Image1} alt="" />
          </div>
          <div>
            <img src={Image2} alt="" />
          </div>
        </Slider>
      </div>
    )
}

export default Carousel;
