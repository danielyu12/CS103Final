import React from 'react';
import './Restaurant.css';

const Restaurant = (props) => {
  return (
    <div className="content">
      <a href='/credits'><img className="image" src={props.image} alt={`Image of ${props.name}`} /> </a>
      <div className="name-address">
        <h2 className="name">{props.name}</h2>
        <h3 className="address">{props.address}</h3>
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
};

export default Restaurant;
