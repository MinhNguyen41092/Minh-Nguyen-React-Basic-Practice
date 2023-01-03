import React from 'react';
import Logo from '../../components/common/Logo';
import Button from '../../components/common/Button';

import './index.css';

const Header = () => (
  <header className="header-wrapper">
    <Logo />
    <Button
      type="button"
      className="btn-cart"
      icon="./src/assets/images/iconButton/cart.png"
    />
  </header>
);

export default Header;
