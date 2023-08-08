import React from 'react';
import footerLogo from '../ressources/footerLogo.png'
import '../style/footer.css'

const Footer = () => {
  return (
    <section className='footer'>    
       <img id='logo' src={footerLogo} alt='logo'/>
        <p id='footer-text'>© 2020 Kasa. All rights reserved</p>     
    </section>
  );
};

export default Footer;