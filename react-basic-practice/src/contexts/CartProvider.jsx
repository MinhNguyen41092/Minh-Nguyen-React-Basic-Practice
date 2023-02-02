import React, {
  useContext, useEffect, useMemo, useState,
} from 'react';
import { getCartByUserId } from '@/services/Cart';
import { useAuth } from './AuthProvider';

const CartContext = React.createContext();
const useCart = () => useContext(CartContext);

const CartProvider = (props) => {
  const { children } = props;
  const [cart, setCart] = useState([]);
  const { userData } = useAuth();

  useEffect(() => {
    const getData = async () => {
      try {
        const dataCart = await getCartByUserId(userData.userId);
        setCart(dataCart);
      } catch {
        setCart([]);
      }
    };

    getData();
  }, [userData]);

  const valueContext = useMemo(() => ({
    cart,
    setCart,
  }), [cart]);

  return (
    <CartContext.Provider
      value={valueContext}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
