import React from 'react';
import Carousel from 'react-alice-carousel';
import Nav from '../../components/Navbar/Nav';
import './Restaurants.css';
import Footer from '../../components/Footer/Footer';
import Pieronis from '../../assets/restaurants/pieronis.jpg';
import Typewriter from '../../components/Typewriter/Typewriter';

const Restaurants = () => {
  return (
    <div>
      <header>
        <h1>Restaurants</h1>
      </header>
      <Nav />
      <main>
        <div>
          <Typewriter />
          <div>
            <img src={Pieronis} alt="Pieroni's Restaurant" />
            <p className="caption">Pieroni's Restaurant</p>
          </div>

          <p>
            Indulge your taste buds in Boston's diverse culinary landscape with
            our curated selection of restaurants. Whether you're seeking the
            laid-back charm of casual dining, the refined elegance of fine
            dining establishments, or the swift and delicious offerings of
            fast-casual gems, our city guide ensures you experience the full
            spectrum of dining experiences.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Restaurants;
