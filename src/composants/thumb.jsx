import '../style/thumb.css'
import React from 'react';

const Thumb = (props) => {
    
    const data = props;
    const backgroundCardStyle = {
        backgroundImage: `url(${data.cover}), linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(0, 0, 0, 0.5) 100%
          )`,
      }
    return (
        <div id='thumbnail' style={backgroundCardStyle}>
            <p id='title'>{data.title}</p>
        </div>
        );
};
export default Thumb