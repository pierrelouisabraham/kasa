import React from "react";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes } from 'react-router-dom';
import Banner from './composants/header';
import UnderHeader from './composants/UnderHeader';
import Homepage from './pages/json'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Banner/>
  <Homepage/>
  <UnderHeader/>
  </BrowserRouter>
);

reportWebVitals();