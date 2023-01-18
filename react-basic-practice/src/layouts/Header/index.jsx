import React, { useEffect, useState } from 'react';
import Logo from '@/components/common/Logo';
import Button from '@/components/common/Button';
import userIcon from '@/assets/images/user-icon.png';
import cartButton from '@/assets/images/iconButton/cart.png';
import CartSideBar from '@/components/CartSideBar';
import { useCart } from '@/contexts/CartProvider';
import { useAuth } from '@/contexts/AuthProvider';
import { getUserById } from '@/services/Users';

import './index.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const { listItem } = useCart();
  const { userId } = useAuth();

  useEffect(() => {
    const getData = async () => {
      const data = await getUserById(userId);
      data ? setUserName(data.username) : setUserName('User name');
    };

    getData();
  }, [userId]);

  const handleOpenCart = () => {
    setIsOpen(true);
  };

  const handleCloseCart = () => {
    setIsOpen(false);
  };

  return (
    <header className="header-wrapper">
      <Logo />
      <div className="user">
        <div className="user-information">
          <img className="user-icon" src={userIcon} alt="user" />
          <span className="user-name">{userName}</span>
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
    </header>
  );
};

export default Header;
