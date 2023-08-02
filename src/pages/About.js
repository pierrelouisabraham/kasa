import React from 'react';
import Headers from '../composants/header'
import UnderHeader from '../composants/UnderHeader';
import Dropdown from '../composants/dropdown';


    const titleFiabilité = 'Fiabilité';
    const descriptionFiabilité=
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.';
    const titleRespect = 'Respect';
    const descriptionRespect =
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
  
      const titleService = 'Service';
      const descriptionService = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
  
      const titleSécurité = 'Sécurité';
      const descriptionSécurité =
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
const AboutPage = () => {
  return(
    <><div>
      <Headers underline={false} lineThrough={true} />
      <UnderHeader/>
    </div>
    <div>
      <Dropdown title={titleFiabilité} options={descriptionFiabilité}/>
      <Dropdown title={titleRespect} options={descriptionRespect}/>
      <Dropdown title={titleService} options={descriptionService}/>
      <Dropdown title={titleSécurité} options={descriptionSécurité}/>
    </div>
    </>
  ); 
};

export default AboutPage; 