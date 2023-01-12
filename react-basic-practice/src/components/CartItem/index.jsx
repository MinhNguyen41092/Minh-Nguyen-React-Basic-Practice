import React from 'react';
import Button from '../common/Button';
import './index.css';

const CartItem = (props) => {
  const { item, onHandleDeleteCart } = props;
  return (
    <article className="cart-item">
      <h4 className="name">{item.name}</h4>
      <p className="quantity">{`Quantity: ${item.quantity}`}</p>
      <p className="price">{`$ ${item.price}`}</p>
      <Button
        onClick={onHandleDeleteCart}
        type="button"
        className="btn btn-delete"
        text="X"
      />
    </article>
  );
};

export default CartItem;
