import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../composants/header';
import UnderHeader from '../composants/UnderHeader';
import "../style/thumb.css"
import Footer from '../composants/footer';
import NotFound from './NotFound';

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
  if (!accommodations ) {
    return <NotFound/>
  }
  return (
    <div>
      <Banner underline={true} lineThrough={false}/>
      <UnderHeader/>
      <section className='thumbnail-section'>
      
      {accommodations.map((accommodation) => (
        <Listing key={accommodation.id} accommodation={accommodation} />
      ))}
    </section>
        <Footer/>
    </div>
  
  );
};

export default Home;