import React, {
  useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import { getCartByUserId, updateCart } from '@/services/Cart';

const CartContext = React.createContext();
const useCart = () => useContext(CartContext);

const CartProvider = (props) => {
  const { children } = props;
  const [listItem, setListItem] = useState([]);

  useEffect(async () => {
    try {
      const dataCart = await getCartByUserId(1);
      setListItem(dataCart);
    } catch {
      setListItem([]);
    }
  }, []);

  const updateItemCart = useCallback(
    async () => {
      const data = await updateCart(1, listItem);

      return data;
    },
    [listItem],
  );

  const valueContext = useMemo(() => ({
    listItem,
    setListItem,
    updateItemCart,
  }), [listItem, updateCart]);

  return (
    <CartContext.Provider
      value={valueContext}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider, initCartList };
