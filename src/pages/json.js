import React, { useState, useEffect } from "react";

const AppartementList = () => {
  const [Appartements, setAppartement] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  


  useEffect(() => {
    
    try {
      fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json") // Remplacez l'URL par l'URL de votre API réelle si vous l'utilisez
      .then((response) => response.json())
      .then((data) => setAppartement(data));
    }
    catch (error) {
      setError(true);
      setErrorMessage('Une erreur est survenue lors de l\'appel à l\'API.');
    }
  }, []);
  
  return (
    <div>
      <h2>Liste des appartement :</h2>
      <ul>
        {Appartements.map((appartement) => (
          <><li key={appartement.id}>
            {appartement.title} - {appartement.cover}  {appartement.description} {appartement.host.name} {appartement.host.picture}
          </li><img src={appartement.pictures} alt={appartement.title} /></>
        ))}
      </ul>
      {error && <p>{errorMessage}</p>}
    </div>
    
  );
};

export default AppartementList;