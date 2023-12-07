import React from 'react';
import './Restaurant.css';

const Restaurant = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <div className="image-paragraph">
        <img src={props.image} alt={`Image of ${props.name}`} />
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Restaurant;
