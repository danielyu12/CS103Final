import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Body(props) {
  return (
    <>
      <div style={{ display: 'block', width: 700, padding: 30, margin: "auto" }}>
        <Carousel>
          {
            props.images.map((img, ind) => (
              <Carousel.Item interval={3000} key={ind}>
                <img
                  className="d-block w-100"
                  src={img.source}
                  alt={img.name}
                />
              </Carousel.Item>
            ))
          }
        </Carousel>
      </div>
      {props.text && <p>{props.text}</p>}
    </>

  );
}