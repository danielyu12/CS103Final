import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="restaurants">Restaurants</Link>
        </li>
        <li>
          <Link to="coffee">Coffee</Link>
        </li>
        <li>
          <Link to="nightlife">Nightlife</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
