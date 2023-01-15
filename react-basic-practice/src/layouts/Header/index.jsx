import React, { useState } from 'react';
import Logo from '../../components/common/Logo';
import Button from '../../components/common/Button';
import userIcon from '@/assets/images/user-icon.png';
import cartButton from '@/assets/images/iconButton/cart.png';
import CartBar from '@/components/CartBar';

import './index.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenCart = () => {
    setIsOpen(true);
  };

  const onCloseCart = () => {
    setIsOpen(false);
  };

  return (
    <header className="header-wrapper">
      <Logo />
      <div className="user">
        <div className="user-information">
          <img className="user-icon" src={userIcon} alt="user" />
          <span className="user-name">Minh nguyen</span>
        </div>
        <div className="cart">
          <Button
            type="button"
            className="btn-cart"
            icon={cartButton}
            onClick={onOpenCart}
          />
          <span className="quantity-cart">2</span>
        </div>
      </div>
      {
        isOpen && <CartBar handleCloseCart={onCloseCart} />
      }
    </header>
  );
};

export default Header;
