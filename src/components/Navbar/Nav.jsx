import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [showMainNav, setShowMainNav] = useState(true);
  const location = useLocation();
  const onRestaurants = () => {
    if (
      location.pathname === '/restaurants' ||
      location.pathname === '/restaurants/finedining' ||
      location.pathname === '/restaurants/casual' ||
      location.pathname === '/restaurants/fastcasual'
    ) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (onRestaurants()) {
      setShowMainNav(false);
    }
  }, []);

  return (
    <nav>
      {!showMainNav && (
        <button
          onClick={() => {
            setShowMainNav(true);
          }}
        >
          ←
        </button>
      )}
      {showMainNav ? (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/restaurants">Restaurants</Link>
          </li>
          <li>
            <Link to="/coffee">Coffee</Link>
          </li>
          <li>
            <Link to="/nightlife">Nightlife</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/restaurants/finedining">Fine Dining</Link>
          </li>
          <li>
            <Link to="/restaurants/casual">Casual</Link>
          </li>
          <li>
            <Link to="/restaurants/fastcasual">Fast Casual</Link>
          </li>
        </ul>
      )}
      {showMainNav && onRestaurants() && (
        <button
          onClick={() => {
            setShowMainNav(false);
          }}
        >
          →
        </button>
      )}
    </nav>
  );
};

export default Nav;
