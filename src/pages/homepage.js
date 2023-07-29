import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../composants/header';
import UnderHeader from '../composants/UnderHeader';
import "../style/thumb.css"

function Listing({ accommodation }) {
  return (
    <div className='thumbnail'>
      <Link to={`/kasa/accommodation/${accommodation.id}`}>
      <h2 className='title'>{accommodation.title}</h2>
      <img className='img-thumb' src={accommodation.cover} alt={accommodation.title} /></Link>
    </div>
  );
}

const Home = ({ accommodations }) => {

  return (
    <div>
      <Banner/>
      <UnderHeader/>
      <section className='thumbnail-section'>
      
      {accommodations.map((accommodation) => (
        <Listing key={accommodation.id} accommodation={accommodation} />
      ))}
    </section>

    </div>
  
  );
};

export default Home;