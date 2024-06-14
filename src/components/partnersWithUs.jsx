// PartnersPage.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/partners.css";

// Sample partner logos
const partnerLogos = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  // Add more partner logos as needed
];

// Sample images for slideshow


const PartnersPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
  };

  return (
    <div className="partners-page">
      <h1>Partners with Us</h1>
      <div className="conatinerText">
        <p>
          We believe that collaboration is key to creating positive change.
          Partnering with us allows you to make a meaningful impact and
          contribute to our shared mission of improving lives and communities.
        </p>
        <p>
          Whether you represent a corporation, foundation, nonprofit
          organization, or government agency, we welcome partnerships that align
          with our values and objectives. Together, we can achieve greater
          impact and create lasting change.
        </p>
        <p>
          If you're interested in exploring partnership opportunities, please
          contact us using the form below:
        </p>
      </div>
      <div className="partner-logos">
        <Slider {...settings}>
          {partnerLogos.map((logo, index) => (
            <div key={index}>
              <img src={logo} alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnersPage;
