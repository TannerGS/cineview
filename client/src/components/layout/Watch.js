import React from 'react'
import Slider from "react-slick";
import Image1 from '../../img/image_1.jpg';
import Image2 from '../../img/image_2.jpg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Watch = () => {
    const settings = {
    	dots: true,
			arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
      };

    return (
        <div>
				<h2>Watch Later</h2> 
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

export default Watch;
