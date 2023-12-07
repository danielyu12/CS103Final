import React from 'react';
import Carousel from 'react-alice-carousel';
import Nav from '../../components/Navbar/Nav';
import './Restaurants.css';
import Footer from '../../components/Footer/Footer';

const Restaurants = () => {
  return (
    <div>
      <header>
        <h1>Restaurants</h1>
      </header>
      <Nav />
      <main>
        <h2>
          ↑ Select one of the links above to see what restaurants Boston has to
          offer! ↑
        </h2>
        <p>
          Indulge your taste buds in Boston's diverse culinary landscape with
          our curated selection of restaurants. Whether you're seeking the
          laid-back charm of casual dining, the refined elegance of fine dining
          establishments, or the swift and delicious offerings of fast-casual
          gems, our city guide ensures you experience the full spectrum of
          dining experiences.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Restaurants;
