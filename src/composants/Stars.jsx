import React from 'react';
import starRed from '../ressources/star-active 1.png'
import starEmpty from '../ressources/star-inactive 1.png'  

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const filledStars = rating;
  console.log(rating);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      if (i <= filledStars) {
        stars.push(<img key={i} src={starRed} alt="Étoile remplie" />);
      } else {
        stars.push(<img key={i} src={starEmpty} alt="Étoile vide" />);
      }
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;





