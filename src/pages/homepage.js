import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../composants/header';
import UnderHeader from '../composants/UnderHeader';
import "../style/thumb.css"
import Footer from '../composants/footer';
import NotFound from './NotFound';

function Listing({ accommodation }) {
  const backgroundCardStyle = {
    backgroundImage: `url(${accommodation.cover}), linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
      )`,
  }
  return (
   
      <Link to={`/kasa/accommodation/${accommodation.id}`} className="card" style={backgroundCardStyle}>
      <span className='title'>{accommodation.title}</span>
      </Link>
 
  );
}



const Home = ({ accommodations }) => {
  if (!accommodations ) {
    return <NotFound/>
  }
  return (
    <div className='parent'>
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