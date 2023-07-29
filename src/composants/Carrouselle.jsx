import React, { useState, useEffect } from 'react';
import "../style/carousel.css"

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button className='prev' onClick={handlePrev}>&lt;</button>
      <img src={images[currentImageIndex]} alt={`${currentImageIndex + 1}`} />
      <button className='next' onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Carousel;