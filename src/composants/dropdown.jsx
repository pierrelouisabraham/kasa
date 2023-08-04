import React, { useState } from 'react';
import arrowUp from '../ressources/arrow_up.png'
import arrowDown from '../ressources/arrow_down.png'
import "../style/dropdown.css"

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [setSelectedOption] = useState(options[0]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <span>{title}</span>
        <img
          src={isOpen ? arrowUp : arrowDown}
          alt="arrow"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen ? (
        typeof options === 'string' ? (
        <div className='description'>
        <p >{options}</p>
        </div>
         ) : (
          <div className='description' onChange={handleOptionChange}>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </div>
        )
      ) : null}
    </div>
  );
};

export default Dropdown;