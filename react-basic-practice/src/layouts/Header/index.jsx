import React from 'react';
import Logo from '../../components/common/Logo';
import Button from '../../components/common/Button';
import userIcon from '@/assets/images/user-icon.png';
import cartButton from '@/assets/images/iconButton/cart.png';

import './index.css';

const Header = () => (
  <header className="header-wrapper">
    <Logo />
    <div className="user">
      <div className="user-information">
        <img className="user-icon" src={userIcon} alt="" />
        <span className="user-name">Minh nguyen</span>
      </div>
      <Button
        type="button"
        className="btn-cart"
        icon={cartButton}
      />
    </div>
  </header>
);

export default Header;
