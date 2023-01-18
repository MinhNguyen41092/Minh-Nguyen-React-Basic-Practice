import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/Logo.png';
import ROUTE from '@/constants/route';

const Logo = () => (
  <Link to={ROUTE.HOMEPAGE}>
    <h1 className="logo">
      <img className="logo" src={logo} alt="logo" />
    </h1>
  </Link>
);

export default Logo;
