import React from 'react';
import Carousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Body.css';

const Body = (props) => {
  return (
    <main>
      <div className="carousel">
        <Carousel
          className="carousel"
          controlsStrategy="alternate"
          responsive={{ 0: { items: 1 } }}
        >
          {props.images?.map((image, ind) => (
            <img src={image} alt="" key={ind} />
          ))}
        </Carousel>
      </div>
      <p>{props.text}</p>
    </main>
  );
};

export default Body;
