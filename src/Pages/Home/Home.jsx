import React from 'react';
import Nav from '../../components/Navbar/Nav';
import Footer from '../../components/Footer/Footer';
import Body from '../../components/Body/Body';
import image1 from '../../assets/home/image1.jpg';
import image2 from '../../assets/home/image2.jpg';
import image3 from '../../assets/home/image3.jpg';
import image4 from '../../assets/home/image4.jpg';

const Home = () => {
  const images = [
    { name: "Barcelona", source: image1 },
    { name: "Carmelina", source: image2 },
    { name: "Ogawa", source: image3 },
    { name: "Yume ga Arukara", source: image4 },
  ]
  const text = "Welcome to Boston Bites & Sips, your ultimate guide to the vibrant culinary scene of this historic city! Explore the diverse flavors that Boston has to offer as we curate a delightful collection of restaurants, cozy coffee shops, and lively bars. Whether you're a local looking for hidden gems or a visitor eager to taste the essence of Boston, let your culinary journey begin here.";
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
      <Body header="Home" images={images} text={text} />

      <Footer />
    </div>
  );
};

export default Home;
