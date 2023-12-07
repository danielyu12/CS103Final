import React from 'react';
import Jefes from '../../assets/restaurants/fastcasual/jefes.jpeg';
import Joes from '../../assets/restaurants/fastcasual/joes.jpeg';
import Tasty from '../../assets/restaurants/fastcasual/tasty.jpeg';
import RestaurantsHeader from '../../components/RestaurantsHeader/RestaurantsHeader';
import Nav from '../../components/Navbar/Nav';
import Restaurant from '../../components/Restaurant/Restaurant';
import Footer from '../../components/Footer/Footer';

const FastCasual = () => {
  const restaurants = [
    {
      rname: "El Jefe's Taqueria",
      text: 'Securing a reservation at Krasi may prove challenging, but the experience lives up to its well-deserved acclaim: exceptional Greek cuisine, an impressive wine selection, and warm hospitality in a stylish yet inviting atmosphere. Chef Valentine Howell, a 2023 James Beard award finalist, leads the kitchen, while Evan Turner oversees the outstanding wine program. From freshly baked breads and make-it-yourself tzatziki to Greek cheeses and standout dishes like mushroom orzo, grilled octopus, and lamb osso buco, each element is exceptional and perfect for sharing with a friend.',
      image: Jefes,
    },
    {
      rname: "Joe's",
      text: "Craving an upscale evening? Yvonne's, presenting itself as a contemporary supper club, proves to be an excellent choice. Beyond its stylish ambiance, this sophisticated establishment offers not only exquisite snacks and cocktails but also sizable shared dishes and beverages perfect for enjoying with friends.",
      image: Joes,
    },
    {
      rname: 'Tasty Burger',
      text: 'Drawing inspiration from mid-20th century fast-food establishments, Tasty Burger pays homage to the roots that likely gave rise to events like Burger Week. Established in 2010 behind Fenway Park, Tasty Burger has since expanded to five city locations and a food truck. The Big Tasty, reminiscent of a certain fast-food classic, features a six-ounce chuck patty expertly grilled to medium perfection, complemented by chopped onions, pickles, and Tasty Burger\'s signature "tasty sauce," delivering a home run of flavor.',
      image: Tasty,
    },
  ];
  return (
    <div>
      <RestaurantsHeader header="Fast Casual" />
      <Nav />
      <main>
        {restaurants.map(({ rname, text, image }) => (
          <Restaurant name={rname} text={text} key={rname} image={image} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default FastCasual;
