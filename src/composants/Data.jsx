import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import jsonData from "../ressources/data.json"

    const accommodationsData = jsonData;

    const AccommodationCard = ({ accommodation }) => {
        return (
            <Link to={`/accommodations/${accommodation.id}`} className="card-link">
            <div className="card">
              <img src={accommodation.cover} alt={accommodation.title} />
             
            </div>
          </Link>
        );
      };
      
      const AccommodationList = () => {
        return (
          <div className="accommodation-list">
            {accommodationsData.map((accommodation) => (
              <AccommodationCard key={accommodation.id} accommodation={accommodation} />
            ))}
          </div>
        );
      };
      
      export default AccommodationList;

