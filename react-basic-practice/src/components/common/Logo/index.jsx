// import react
import React from 'react';
import { Link } from 'react-router-dom';

// import image
import logo from '@/assets/images/Logo.png';

// import constants
import ROUTE from '@/constants/route';

const Logo = () => (
  <Link to={ROUTE.HOMEPAGE}>
    <h1 className="logo">
      <img className="logo" src={logo} alt="logo" />
    </h1>
  </Link>
);

export default Logo;
