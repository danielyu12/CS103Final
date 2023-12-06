import React from 'react';
import Body from '../../components/Body/Body';
import Nav from '../../components/Navbar/Nav';
import Footer from '../../components/Footer/Footer';

const tempText =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, a!';

const Coffee = () => {
  return (
    <div>
      <header>
        <h1>Coffee</h1>
      </header>
      <Nav />
      <Body text={tempText} />
      <Footer />
    </div>
  );
};

export default Coffee;
