import React, { useState, useEffect } from 'react';
import "../style/carousel.css"
import arrowLeft from "../ressources/arrow_back.png"
import arrowRight from "../ressources/arrow_forward.png"

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
      {images.length > 1 && (
        <img
          className="prev"
          src={arrowLeft}
          alt="chevron gauche"
          onClick={handlePrev}
        />
      )}
      <img className='image-carroussel' src={images[currentImageIndex]} alt={`${currentImageIndex + 1}`} />
      {images.length > 1 && ( 
        <img
          className="next"
          src={arrowRight}
          alt="chevron droite"
          onClick={handleNext}
        />
      )}
      <p className="counter">
        {currentImageIndex + 1} / {images.length}
      </p>
    </div>
    
  );
};

export default Carousel;