import React from 'react';
import Logo from '../../components/common/Logo';
import Button from '../../components/common/Button';

import './index.css';

const Header = () => (
  <header className="header-wrapper">
    <Logo />
    <div className="user">
      <div className="user-information">
        <img className="user-icon" src="./src/assets/images/user-icon.png" alt="" />
        <span className="user-name">Minh nguyen</span>
      </div>
      <Button
        type="button"
        className="btn-cart"
        icon="./src/assets/images/iconButton/cart.png"
      />
    </div>
  </header>
);

export default Header;
