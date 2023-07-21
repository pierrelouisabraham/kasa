import '../style/thumb.css'
import React from 'react';

const Thumb = (props) => {

    const data = props;
    return (
        <div id='thumbnail'>
            <img id='img-thumb' src={data.cover} alt='thumbnail'></img>
            <p id='title'>{data.title}</p>
        </div>
        );
};
export default Thumb