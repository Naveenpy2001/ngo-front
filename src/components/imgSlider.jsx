import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/slide.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slidesData = [
    {
      image:
        // "https://worldinfi.com/wp-content/uploads/2018/02/What-is-the-International-Day-for-Street-Children-3-1024x683.jpg",
        "http://manavkartavya.org/wp-content/uploads/2018/08/children.jpg",
      title: "What is NGO",
      description:
        "An NGO (Non-Governmental Organization) is a non-profit entity that operates independently from any government. NGOs are usually dedicated to addressing social, political, or environmental issues. They play a crucial role in society by advocating for human rights, providing humanitarian aid, and implementing sustainable development projects. ",
    },
    {
      image:
        "https://vidya-india.org/wp-content/uploads/2017/12/vidyaindia_children_youth_women_ngo_compressed.jpg",
      title: "NGO Donations",
      description:
        "NGO donations are financial or in-kind contributions made by individuals, corporations, or governments to support the work and initiatives of NGOs. These donations are vital for the sustainability and effectiveness of NGO projects, as they fund activities such as disaster relief, educational programs, healthcare services, and environmental conservation efforts. ",
    },
    {
      image:
        "https://1.bp.blogspot.com/-kPe0zpf6WdQ/URyS8AX-RGI/AAAAAAAABNA/M8P4-vVQUuY/w1200-h630-p-k-no-nu/Indian-children-NGO-food-for-education-akshaya-patra.jpg",
      title: "Impact of NGOs",
      description:
        "NGOs have a significant impact on a wide range of global issues, including education, health, human rights, and environmental sustainability. They work on the ground to provide immediate relief in disaster-stricken areas, advocate for policy changes, and empower communities through education and resources. ",
    },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="slide">
            <div
              className="slide-content"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="text-content">
                <div className="center-flex">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
