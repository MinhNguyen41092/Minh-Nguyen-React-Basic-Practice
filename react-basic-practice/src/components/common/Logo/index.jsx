// Import react
import React from 'react';
import { Link } from 'react-router-dom';

// Import image
import logo from '@/assets/images/Logo.png';

// Import constants
import ROUTE from '@/constants/route';

const Logo = () => (
  <Link to={ROUTE.HOMEPAGE}>
    <h1 className="logo">
      <img className="logo" src={logo} alt="logo" />
    </h1>
  </Link>
);

export default Logo;
