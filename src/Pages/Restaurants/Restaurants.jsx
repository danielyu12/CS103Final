import React, { useEffect } from 'react';
import Nav from '../../components/Navbar/Nav';
import './Restaurants.css';
import Footer from '../../components/Footer/Footer';
import Pieronis from '../../assets/home/image1.jpg';
import Typewriter from '../../components/Typewriter/Typewriter';
import { Link } from 'react-router-dom';

const Restaurants = () => {
  useEffect(() => {
    document.title = 'Restaurants | Boston Bites & Sips';
  }, []);
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
            <Link to='/credits'><img src={Pieronis} alt="Pieroni's Restaurant" /></Link>
            <p className="caption">Barcelona Wine Bar</p>
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
