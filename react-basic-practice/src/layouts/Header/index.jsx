// import react
import React, { useState } from 'react';

// import component
import Logo from '@/components/common/Logo';
import Button from '@/components/common/Button';
import CartSideBar from '@/components/CartSideBar';
import UserCard from '@/components/UserCard';

// import context
import { useCart } from '@/contexts/CartProvider';
import { useAuth } from '@/contexts/AuthProvider';

// import image
import userIcon from '@/assets/images/user-icon.png';
import cartButton from '@/assets/images/iconButton/cart.png';

// import file css
import './index.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userCard, setUserCard] = useState(false);
  const { listItem } = useCart();
  const { userData } = useAuth();

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
        <div className="user-information">
          <Button
            type="button"
            className="btn-user"
            icon={userIcon}
            onClick={handleOpenUserCard}
          />
          <span className="user-name">{userData.username}</span>
        </div>
        <div className="cart">
          <Button
            type="button"
            className="btn-cart"
            icon={cartButton}
            onClick={handleOpenCart}
          />
          <span className="quantity-cart">{listItem.listProducts?.length}</span>
        </div>
      </div>
      {
        isOpen && <CartSideBar onCloseCart={handleCloseCart} />
      }
      {
        userCard && <UserCard onCloseUserCard={handleCloseUserCard} />
      }
    </header>
  );
};

export default Header;
