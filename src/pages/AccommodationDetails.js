import React from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../composants/Carrouselle';
import Banner from '../composants/header';
import Footer from '../composants/footer';
import "../style/accomodation-details.css"
import Tag from '../composants/Tag'

const AccommodationDetail = ({ accommodations }) => {
  const { id } = useParams();
  const accommodation = accommodations.find(acc => acc.id === id);
  const { title, cover, pictures, description, host, rating, location, equipments, tags } = accommodation;
  if (!accommodation) {
    return <div>Accommodation not found.</div>;
  }

  return (
    <div>
        <Banner/>
        <Carrousel images={ pictures}/>
        <section className='details'>
            <div className='info'>
                <h2 className='title-accomodation'>{title}</h2>
                <p className='location'>{location}</p>
            </div>
            <div className='owner'>
                <h3 className='owner-name'>{host.name}</h3>
                <img className='portrait' src={host.picture} alt={host.name} />
                
            </div>
            
        </section>
        <div className='tags-and-stars'>
            {tags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
                
            </div>

        <p className='description'>{accommodation.description}</p>
        <p>Rating: {accommodation.rating}</p>
        
       
        <Footer/>
    </div>
  );
};

export default AccommodationDetail;