import React from 'react';
import Body from '../../components/Body/Body';
import Nav from '../../components/Navbar/Nav';
import Footer from '../../components/Footer/Footer';
import image1 from '../../assets/coffee/coffee-george-howell.jpg';
import image2 from '../../assets/coffee/coffee-gracenote.jpg';
import image3 from '../../assets/coffee/coffee-ogawa.jpg';
import image4 from '../../assets/coffee/coffee-render.jpg';



const Coffee = () => {
  const content = [
    { source: image1, name: "George Howell Coffee", text: "Nestled in downtown Boston's Godfrey Hotel, George Howell's elegant establishment exudes a European-style espresso bar ambiance, offering swift coffee service and an array of expertly crafted espresso beverages. Don't miss the chance to explore the inventive seasonal specials, each reminiscent of a finely crafted cocktail with their intricate flavor profiles.", website: "https://georgehowellcoffee.com/" },
    { source: image2, name: "Gracenote Coffee", text: "Situated snugly in the Leather District, Gracenote's cozy nook may be small, making it unsuitable for extended laptop sessions, but it radiates a friendly and warm atmosphere. Regulars can depend on the assurance of a superb cup of coffee each morning. Explore a second location within the bustling High Street Place food hall in downtown Boston.", website: "https://www.gracenotecoffee.com/" },
    { source: image3, name: "Ogawa Coffee", text: "Selected as its inaugural international location, this renowned Japanese coffee chain, Ogawa Coffee, made its debut in Boston. Established in Downtown Crossing in May 2015, it introduced its commitment to \"coffee perfection\" to the U.S. The café features a diverse selection of specialty coffee beverages, such as cold espresso, a trio of single-origin coffees, hot and iced varieties, cappuccinos, lattes, and more. The space offers stadium-style seating, allowing coffee enthusiasts to effortlessly observe the skilled baristas at work.", website: "https://www.ogawacoffeeusa.com/" },
    { source: image4, name: "Render Coffee", text: "Established in 2011, the well-loved Render cafe takes pride in roasting its own coffee, presenting a menu that includes pour-over cups, espresso drinks, and pots of tea. Complementing the diverse beverage options, the cafe also offers a delectable selection of food, featuring items such as scones, muffins, salads, and sandwiches.", website: "https://www.rendercoffeebar.com/" }

  ]

  return (
    <div>
      <header>
        <h1>Coffee</h1>
      </header>
      <Nav />
      {content.map((place, ind) => (
        <div key={ind}>
          <h2>{place.name}</h2>
          <div style={{ display: "flex" }}>
            <img src={place.source} alt={place.name} style={{ display: "inline", maxWidth: "400px" }} />
            <div style={{ display: "inline" }}>
              <p>{place.text}</p>
            </div>

          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Coffee;
