import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Slider.css";
import img1 from "../media/ngo-img1.jpg";
const images = [
  img1,
  "https://example.com/image2.jpg",
  "https://example.com/image3.jpg",
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Add this line for autoplay
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              width={100 + "%"}
              height={600 + "px"}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
