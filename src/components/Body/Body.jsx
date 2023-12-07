import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Body(props) {
  return (
    <div style={{ backgroundColor: '#ebe3d5' }}>
      <div
        style={{
          display: 'block',
          width: '60%',
          padding: 30,
          margin: 'auto',
          backgroundColor: '#ebe3d5',
        }}
      >
        <Carousel>
          {props.images.map((img, ind) => (
            <Carousel.Item interval={3000} key={ind}>
              <img className="d-block w-100" src={img.source} alt={img.name} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {props.text && (
        <p
          style={{
            margin: 0,
            backgroundColor: '#ebe3d5',
            padding: '1vw',
            paddingTop: 0,
            fontSize: 'calc(10px + 1vw)',
          }}
        >
          {props.text}
        </p>
      )}
    </div>
  );
}
