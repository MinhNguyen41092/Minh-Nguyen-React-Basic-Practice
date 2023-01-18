import React, {
  useContext, useEffect, useMemo, useState,
} from 'react';
import { getCartByUserId } from '@/services/Cart';
import { useAuth } from './AuthProvider';

const CartContext = React.createContext();
const useCart = () => useContext(CartContext);

const CartProvider = (props) => {
  const { children } = props;
  const [listItem, setListItem] = useState([]);
  const { userId } = useAuth();

  useEffect(() => {
    const getData = async () => {
      try {
        const dataCart = await getCartByUserId(userId);
        setListItem(dataCart);
      } catch {
        setListItem([]);
      }
    };

    getData();
  }, [userId]);

  const valueContext = useMemo(() => ({
    listItem,
    setListItem,
  }), [listItem]);

  return (
    <CartContext.Provider
      value={valueContext}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
