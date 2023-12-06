import React from 'react';
import Nav from '../../components/Navbar/Nav';
import Footer from '../../components/Footer/Footer';
import Body from '../../components/Body/Body';
import image1 from '../../assets/home/image1.jpeg';
import image2 from '../../assets/home/image2.jpeg';
import image3 from '../../assets/home/image3.jpeg';
import image4 from '../../assets/home/image4.jpeg';

const Home = () => {
  return (
    <div>
      <header>
        <h1>Home</h1>
        <h3>
          Savor the Flavor: Uncover Boston's Culinary Gems with Restaurant
          Recommender
        </h3>
      </header>
      <Nav />
      <Body header="Home" images={[image2, image2]} />
      <Footer />
    </div>
  );
};

export default Home;
