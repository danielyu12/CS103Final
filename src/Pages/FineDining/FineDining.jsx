import React from 'react';
import RestaurantsHeader from '../../components/RestaurantsHeader/RestaurantsHeader';
import Krasi from '../../assets/restaurants/finedining/krasi.jpeg';
import Yvonne from '../../assets/restaurants/finedining/yvonnes.jpeg';
import Contessa from '../../assets/restaurants/finedining/contessa.jpeg';
import Restaurant from '../../components/Restaurant/Restaurant';
import Nav from '../../components/Navbar/Nav';
import Footer from '../../components/Footer/Footer';

const FineDining = () => {
  const restaurants = [
    {
      rname: 'Krasi',
      text: 'Securing a reservation at Krasi may prove challenging, but the experience lives up to its well-deserved acclaim: exceptional Greek cuisine, an impressive wine selection, and warm hospitality in a stylish yet inviting atmosphere. Chef Valentine Howell, a 2023 James Beard award finalist, leads the kitchen, while Evan Turner oversees the outstanding wine program. From freshly baked breads and make-it-yourself tzatziki to Greek cheeses and standout dishes like mushroom orzo, grilled octopus, and lamb osso buco, each element is exceptional and perfect for sharing with a friend.',
      image: Krasi,
      address: '48 Gloucester St, Boston, MA 02115',
    },
    {
      rname: 'Yvonne’s',
      text: "Craving an upscale evening? Yvonne's, presenting itself as a contemporary supper club, proves to be an excellent choice. Beyond its stylish ambiance, this sophisticated establishment offers not only exquisite snacks and cocktails but also sizable shared dishes and beverages perfect for enjoying with friends.",
      image: Yvonne,
      address: '2 Winter Pl, Boston, MA 02108',
    },
    {
      rname: 'Contessa',
      text: "Immerse yourself in the luxurious ambiance of the Italian restaurant, surrounded by plush decor and enjoying a bird's-eye view of Newbury Street. During pleasant weather, the team opens the restaurant's windows, providing a refreshing open-air dining experience.",
      image: Contessa,
      address: '3 Newbury St Rooftop, Boston, MA 02116',
    },
  ];
  return (
    <div>
      <RestaurantsHeader header="Fine Dining" />
      <Nav />
      <main>
        {restaurants.map(({ rname, text, image, address }) => (
          <Restaurant
            name={rname}
            text={text}
            key={rname}
            image={image}
            address={address}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default FineDining;
