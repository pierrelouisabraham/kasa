import React from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../composants/Carrouselle';
import Banner from '../composants/header';
import Footer from '../composants/footer';
import "../style/accomodation-details.css";
import Tag from '../composants/Tag';
import Stars from "../composants/Stars"
import NotFound from './NotFound';
import Dropdown from '../composants/dropdown';

const AccommodationDetail = ({ accommodations }) => {
  const { id } = useParams();
  const accommodation = accommodations.find(acc => acc.id === id);
  if (!accommodation) {
    return <NotFound/>;
  }
  const { title, pictures, description, host, rating, location, equipments, tags } = accommodation;

  return (
    <div className='parent'>
        <Banner underline={false} lineThrough={false}/>
        <Carrousel images={ pictures}/>
        <section className='details'>
            <div className='info'>
                <h2 className='title-accomodation'>{title}</h2>
                <p className='location'>{location}</p>
                <div className='tags-div'>
          {tags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
          </div>
            </div>
            <div className='owner-and-stars'>
            <div className='owner'>
                <h3 className='owner-name'>{host.name}</h3>
                <img className='portrait' src={host.picture} alt={host.name} />
                
            </div>
          
            <Stars rating={rating}/>
  </div>

            
        </section>

        
      
        <div className='dropdowns'>
          <Dropdown title="Description" options={description}/>
          <Dropdown title="Equipements" options={equipments}/>
        </div>
       
        
       
        <Footer/>
    </div>
  );
};

export default AccommodationDetail;