import React from 'react';
import Button from '../common/Button';
import CartItem from '../CartItem';
import { useCart } from '@/contexts/CartProvider';
import closeButton from '@/assets/images/iconButton/btn-close.png';

import './index.css';

const data = [
  {
    idProduct: 2,
    quantity: 3,
    name: 'hal earrings',
    price: 25,
  },
  {
    idProduct: 1,
    quantity: 4,
    name: 'lira earrings',
    price: 20,
  },
];

const CartBar = (props) => {
  const { handleCloseCart } = props;
  const { listItem, setListItem } = useCart();
  console.log(listItem);
  const onDeleteCartItem = () => {};

  return (
    <aside className="cart-bar">
      <div className="main">
        <div className="header">
          <h2 className="title">Shopping bag</h2>
          <Button
            onClick={handleCloseCart}
            type="button"
            className="btn btn-close"
            icon={closeButton}
          />
        </div>
        <div className="list-cart-item">
          {
          data.map((item) => (
            <CartItem
              item={item}
              handleDeleteCartItem={onDeleteCartItem}
            />
          ))
        }
        </div>
      </div>
    </aside>
  );
};

export default CartBar;
