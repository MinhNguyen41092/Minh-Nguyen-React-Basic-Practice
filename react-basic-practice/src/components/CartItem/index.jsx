import React from 'react';
import Button from '../common/Button';
import closeButton from '@/assets/images/iconButton/btn-close.png';
import './index.css';

const CartItem = (props) => {
  const { item, handleDeleteCartItem } = props;
  return (
    <article className="cart-item" id={item.idProduct}>
      <h4 className="name">{item.name}</h4>
      <p className="quantity">{`Quantity: ${item.quantity}`}</p>
      <p className="price">{`$ ${item.price}`}</p>
      <Button
        onClick={handleDeleteCartItem}
        type="button"
        className="btn btn-delete"
        icon={closeButton}
      />
    </article>
  );
};

export default CartItem;
