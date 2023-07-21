import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes } from 'react-router-dom';
import Banner from './composants/header';
import UnderHeader from './composants/UnderHeader';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Banner/>
  <UnderHeader/>
  </BrowserRouter>
);

reportWebVitals();