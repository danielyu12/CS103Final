import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>
        All rights reserved by Daniel Yu, Cheng Lin, Danielle Hsieh{' '}
        <Link to="/credits">Credits</Link> &#169;
      </p>
    </footer>
  );
};

export default Footer;
