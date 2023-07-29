import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import HomePage from './pages/homepage';
import NotFoundPage from './pages/NotFound';
import jsonData from './ressources/data.json'
import ReactDOM from 'react-dom/client';
import AccommodationDetails from './pages/AccommodationDetails';
import AboutPage from './pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
const accommodations = jsonData;
root.render( 
    <BrowserRouter>
      <Routes>
        <Route path="/kasa" element={<HomePage accommodations={accommodations} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/kasa/accommodation/:id" element={<AccommodationDetails accommodations={accommodations} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );