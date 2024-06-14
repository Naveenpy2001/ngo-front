
import React from 'react';
import "../css/gallery.css"; // CSS file for styling


import ngo1 from '../media/ngo-1.jpg'
import ngo2 from '../media/ngo-2.jpg'
import ngo3 from '../media/ngo-3.jpg'
import ngo4 from '../media/ngo-4.jpg'
import ngo5 from '../media/ngo-5.jpg'
import ngo6 from '../media/ngo-6.jpg'
import ngo7 from '../media/ngo-7.jpg'
import ngo8 from '../media/ngo-8.jpg'
import ngo9 from '../media/ngo-9.jpg'
import ngo10 from '../media/ngo-10.jpg'
import ngo11 from '../media/ngo-11.jpg'
import ngo12 from '../media/ngo-12.jpg'
import ngo13 from '../media/ngo-13.jpg'
import ngo14 from '../media/ngo-14.jpg'
import ngo15 from '../media/ngo-15.jpg'
import ngo16 from '../media/ngo-16.jpg'
import ngo17 from '../media/ngo-17.jpg'
import ngo18 from '../media/ngo-18.jpg'
import ngo19 from '../media/ngo-19.jpg'
import ngo20 from '../media/ngo-20.jpg'
import ngo21 from '../media/ngo-21.jpg'
import ngo22 from '../media/ngo-22.jpg'

// import SliderImg from "./SliderImg";

const Gallery = () => {
  // const images = [
  //   ngo1,
  //   ngo2,
  //   ngo3,
  //   ngo4,
  //   ngo5,
  //   ngo6,
  //   ngo7,
  //   ngo8,
  //   ngo9,
  //   ngo10,
  //   ngo11,
  //   ngo12,
  //   ngo13,
  //   ngo14,
  //   ngo15,
  //   ngo16,
  //   ngo17,
  //   ngo18,
  //   ngo19,
  //   ngo20,
  //   ngo21,
  //   ngo22,
  //   // Add more image URLs as needed
  // ];
  return (
    <div>
      <GalleryImg />
    </div>
  );
};

export default Gallery;


const images = [
  ngo1,
  ngo2,
  ngo3,
  ngo4,
  ngo5,
  ngo6,
  ngo7,
  ngo8,
  ngo9,
  ngo10,
  ngo11,
  ngo12,
  ngo13,
  ngo14,
  ngo15,
  ngo16,
  ngo17,
  ngo18,
  ngo19,
  ngo20,
  ngo21,
  ngo22,
];

const GalleryImg = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};