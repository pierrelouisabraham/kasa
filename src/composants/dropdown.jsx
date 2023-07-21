import React, { useState } from 'react';
import './dropdown.css';

const Dropdown = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const data = props;
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="dropdown">
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <button className="menu-toggle" onClick={toggleMenu}>
          Equipements
        </button>
        <ul className="menu-items">

        </ul>
      </nav>

    </div>
  );
};

export default Dropdown;