import React, { useState, useEffect } from "react";
import "../css/gallery.css"; // CSS file for styling

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch data from the backend API
    fetch("https://your-backend-api-url.com/gallery")
      .then((response) => response.json())
      .then((data) => setGalleryData(data))
      .catch((error) => console.error("Error fetching gallery data:", error));
  }, []);

  useEffect(() => {
    // Automatically scroll through images every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % galleryData.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [galleryData.length]);

  return (
    <div>
      {/* Grid view section */}
      <div className="gallery-container grid-view">
        {galleryData.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.imageUrl} alt={item.title} />
            <div className="image-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Flex view section */}
      <div className="gallery-container flex-view">
        {galleryData
          .slice(currentIndex, currentIndex + 3)
          .map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item.imageUrl} alt={item.title} />
              <div className="image-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
