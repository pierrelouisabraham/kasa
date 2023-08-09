import React from 'react';
import { Link } from 'react-router-dom';
import "../style/not-found.css"
import Footer from '../composants/footer';

const NotFound = () => {
  return (
    <section className="error">
    <div>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
    </div>
    <Link className="link" to="/kasa">
      Retourner sur la page d’accueil
    </Link>
    <Footer/>
  </section>
  
  );
};

export default NotFound;