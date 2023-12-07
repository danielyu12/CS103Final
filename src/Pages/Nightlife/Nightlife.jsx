import React from 'react';
import Body from '../../components/Body/Body';
import Nav from '../../components/Navbar/Nav';
import Footer from '../../components/Footer/Footer';
import image1 from '../../assets/nightlife/hecate-bar.jpg';
import image2 from '../../assets/nightlife/street-bar.jpg';
import image3 from '../../assets/nightlife/offsuit-bar.jpg';
import image4 from '../../assets/nightlife/citrus-bar.jpg';


const Nightlife = () => {
  const content = [
    { source: image1, name: "Hecate", text: "Hecate stands out as Boston's trendiest recent addition to its bar scene. Established and run by the team behind Krasi, this subterranean speakeasy exudes an ambiance reminiscent of New York City, adding a touch of urban sophistication to the heart of Boston. Upon entering, your eyes gradually adapt to the dimly lit space, where the bartenders, playfully referred to as your \"spirit guides,\" skillfully craft stylish drinks in the backdrop. The anticipation builds as you contemplate who else has secured a spot at this city's hottest destination.", website: "https://hecatebar.com/" },
    { source: image2, name: "The Street Bar", text: "Situated opposite Boston's renowned Public Garden, this historic hotel bar seamlessly connects the past and present, immersing patrons in an experience rich with originality, conviction, and legacy. Crafted with expertise by Major Food Group, the establishment boasts a storied menu showcasing robust cocktails, carefully selected wines, and locally inspired bar fare.", website: "https://www.thenewburyboston.com/dine/street-bar" },
    { source: image3, name: "OFFSUIT", text: "Nestled in a cozy and sophisticated space, OFFSUIT redefines the traditional speakeasy experience. The establishment excels with straightforward cocktails that prioritize premium spirits, fresh ingredients, and carefully carved ice. Transforming classic concoctions like the Dark & Stormy or gimlet into revelations, OFFSUIT's original creations, including the Lounge Act with chamomile-infused apple brandy, showcase its remarkable mixology expertise.", website: "https://www.offsuitboston.com/" },
    { source: image4, name: "Citrus & Salt", text: "Chef Jason Santos adds another gem to his repertoire with Citrus and Salt, inheriting the location once occupied by his former venture, Back Bay Harry's. Embracing its focus on Coastal Mexican small plates, the establishment features a prominent skeleton mural, complemented by painted flowers and string lights that evoke a laid-back beach ambiance. Notably, the bar boasts an impressive array of tequilas and mezcals to enhance the overall experience.", website: "https://www.citrusandsaltboston.com/" }

  ]

  const intro = "Embark on a spirited exploration of Boston's diverse bar scene with our curated guide. From historic establishments to trendy mixology havens, discover the city's finest spots for craft cocktails, local brews, and a welcoming pub ambiance. Join us in uncovering the best places to sip and socialize, capturing the unique flavors that define Boston's dynamic bar culture. Cheers to unforgettable moments in the heart of this vibrant city!"

  return (
    <div>
      <header>
        <h1>Nightlife</h1>
      </header>
      <Nav />
      <p>{intro}</p>
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

export default Nightlife;
