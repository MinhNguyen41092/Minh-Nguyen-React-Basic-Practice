import React from 'react';
import Button from '../common/Button';
import CartItem from '../CartItem';
import closeButton from '@/assets/images/iconButton/btn-close.png';
import { useCart } from '@/contexts/CartProvider';
import { useLoading } from '@/contexts/LoadingProvider';
import { useToast } from '@/contexts/ToastProvider';

import './index.css';
import Toast from '../Toast';

const CartBar = (props) => {
  const { handleCloseCart } = props;
  const { listItem, setListItem } = useCart();
  const { toast, setToast } = useToast();
  const { loading, setLoading } = useLoading();

  const onDeleteCartItem = (e) => {
    const idSelected = e.target.closest('.cart-item').id;
    const updateCarts = listItem.filter((cartItem) => cartItem.id !== idSelected);

    try {
      setListItem(updateCarts);
      setToast({
        openPopup: true,
        status: 'success',
        message: 'The item removed from your shopping bag',
      });
    } catch {
      setToast({
        openPopup: true,
        status: 'error',
        message: 'Remove from cart failed, please try again',
      });
    }
  };

  return (
    <aside className="cart-bar">
      {
        loading
        ? (
          <p className="loading">Loading...</p>
        )
        : (
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
          listItem.listProducts.map((item) => (
            <CartItem
              item={item}
              handleDeleteCartItem={onDeleteCartItem}
            />
          ))
        }
        </div>
      </div>
        )
      }
      {
          toast.openPopup
          && (
          <Toast
            status={toast.status}
            message={toast.message}
            onClose={handleClose}
          />
          )
        }
    </aside>
  );
};

export default CartBar;
