// import react
import React, { useEffect, useRef, useState } from 'react';

// Import component
import Logo from '@/components/common/Logo';
import Button from '@/components/common/Button';
import CartSideBar from '@/components/CartSideBar';
import UserCard from '@/components/UserCard';

// Import context
import { useCart } from '@/contexts/CartProvider';

// Import image
import userIcon from '@/assets/images/user-icon.png';
import cartButton from '@/assets/images/iconButton/cart.png';

// Import file css
import './index.css';

const Header = () => {
  const bodyRef = useRef(document.querySelector('body'));
  const [isOpen, setIsOpen] = useState(false);
  const [userCard, setUserCard] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    const updatePageScroll = () => {
      if (isOpen) {
        bodyRef.current.style.overflow = 'hidden';
      } else {
        bodyRef.current.style.overflow = '';
      }
    };

    updatePageScroll();
  }, [isOpen]);

  const handleOpenCart = () => {
    setIsOpen(true);
  };

  const handleCloseCart = () => {
    setIsOpen(false);
  };

  const handleOpenUserCard = () => {
    setUserCard(true);
  };

  const handleCloseUserCard = () => {
    setUserCard(false);
  };

  return (
    <header className="header-wrapper">
      <Logo />
      <div className="user">
        <div className="cart">
          <Button typeButton="button" className="btn-cart" icon={cartButton} onClick={handleOpenCart} />
          <span className="quantity-cart">{cart.products?.length}</span>
        </div>
        <Button typeButton="button" className="btn-user" icon={userIcon} onClick={handleOpenUserCard} />
      </div>
      {isOpen && <CartSideBar onCloseCart={handleCloseCart} />}
      {userCard && <UserCard onCloseUserCard={handleCloseUserCard} />}
    </header>
  );
};

export default Header;
