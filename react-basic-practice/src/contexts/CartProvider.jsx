import React, { useContext, useMemo, useState } from 'react';

const CartContext = React.createContext();
const useCart = () => useContext(CartContext);
const initCartList = [];

const CartProvider = (props) => {
  const { children } = props;
  const [cartItem, setCartItem] = useState();

  const addCart = '';
  const deleteCart = '';

  const valueContext = useMemo(() => ({
    listCart: cartItem?.products || [],
    addCart,
    deleteCart,
  }), [cartItem?.products, addCart, deleteCart]);

  return (
    <CartContext.Provider
      value={valueContext}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider, initCartList };
