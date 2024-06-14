import React from "react";
import ngo1 from "../media/ngo-1.jpg";
import ngo2 from "../media/ngo-2.jpg";
import ngo3 from "../media/ngo-3.jpg";
import ngo4 from "../media/ngo-4.jpg";
import ngo5 from "../media/ngo-5.jpg";
import ngo6 from "../media/ngo-6.jpg";
import Slider from "react-slick";

import '../css/slide.css'

const SliderImg = () => {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };
    
    return (
      <div>
        <h2>NGO</h2>
        <Slider {...settings}>
          <div className="slick-slide">
            <img src={ngo1} alt="1" className="slickImage"/>
          </div>
          <div>
            <img src={ngo2} alt="2" className="slickImage"/>
          </div>
          <div>
            <img src={ngo3} alt="3" className="slickImage"/>
          </div>
          <div>
            <img src={ngo4} alt="4" className="slickImage"/>
          </div>
          <div>
            <img src={ngo5} alt="5" className="slickImage"/>
          </div>
          <div>
            <img src={ngo6} alt="6" className="slickImage"/>
          </div>
          {/* Add more images as needed */}
        </Slider>
      </div>
    );
}

export default SliderImg;
