import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Body.css';

const Body = (props) => {
  return (
    <div className="carousel-container">
      <Carousel className="carousel" centerMode={true}>
        {props.images?.map((image, ind) => (
          <div>
            <img src={image} alt="" key={ind} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Body;
