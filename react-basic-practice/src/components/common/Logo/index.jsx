import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/Logo.png';

const Logo = () => (
  <Link to="/homepage">
    <h1 className="logo">
      <img className="logo" src={logo} alt="logo" />
    </h1>
  </Link>
);

export default Logo;
