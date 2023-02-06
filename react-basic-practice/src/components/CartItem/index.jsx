// Import react
import React from 'react';
import { Link } from 'react-router-dom';

// Import component
import Button from '../common/Button';

// Import image
import closeButton from '@/assets/images/iconButton/btn-close.png';

// Import file css
import './index.css';

const CartItem = (props) => {
  const { item, handleDeleteCartItem } = props;
  const price = item.price.toFixed(2);

  return (
    <article className="cart-item" data-id={item.idProduct}>
      <Link to={`/products/${item.idProduct}`}>
        <h4 className="name">{item.name}</h4>
      </Link>
      <p className="quantity">{`Quantity: ${item.quantity}`}</p>
      <p className="price">{`$ ${price}`}</p>
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
