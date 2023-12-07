import React from 'react';
import Restaurant from '../../components/Restaurant/Restaurant';
import Nav from '../../components/Navbar/Nav';
import RestaurantsHeader from '../../components/RestaurantsHeader/RestaurantsHeader';
import Carmelinas from '../../assets/restaurants/casual/carmelina.jpg';
import Tora from '../../assets/restaurants/casual/tora.jpg';
import Yume from '../../assets/restaurants/casual/yume.jpg';
import Footer from '../../components/Footer/Footer';

const Casual = () => {
  const restaurants = [
    {
      rname: "Carmelina's",
      text: 'Carmelina\'s boasts expansive windows that seamlessly connect with Hanover Street, offering a view into its beautiful open kitchen. The highlight of the menu is the "Sunday macaroni," a daily indulgence featuring meatballs, sausage, and beef rib in a rich tomato sauce, crowned with a luscious dollop of whipped ricotta. Positioned as the star attraction, Carmelina\'s is dedicated to delivering "traditional Sicilian comfort food with a Mediterranean twist."',
      image: Carmelinas,
    },
    {
      rname: 'Tora Japanese Restaurant',
      text: 'In a neighborhood predominantly known for its Chinese culinary offerings, Tora stands out as an exceptional Japanese dining choice. Established in late 2017, this subterranean gem introduces the concept of kaisen don — enticing rice bowls adorned with fresh sashimi — and proudly claims to be the first local restaurant to do so. Beyond this signature dish, Tora offers an array of delights, including makimono, poke, hot entrees like broiled teriyaki eel over rice, and an expansive menu to cater to diverse palates.',
      image: Tora,
    },
    {
      rname: 'Yume Ga Arukara',
      text: "If you haven't envisioned udon dreams yet, Yume Ga Arukara is sure to make it an irresistible prospect. Crafted in-house, the udon noodles boast an unparalleled freshness that captivates the palate. Each element harmoniously comes together, presenting a level of perfection that leaves you with only one delightful decision: hot or cold? Spicy or mild?",
      image: Yume,
    },
  ];
  return (
    <div>
      <RestaurantsHeader header="Casual" />
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

export default Casual;
