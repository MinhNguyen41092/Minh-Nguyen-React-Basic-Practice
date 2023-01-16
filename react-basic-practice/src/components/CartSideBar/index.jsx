import React from 'react';
import Button from '../common/Button';
import CartItem from '../CartItem';
import closeButton from '@/assets/images/iconButton/btn-close.png';
import { useCart } from '@/contexts/CartProvider';
import { useToast } from '@/contexts/ToastProvider';

import './index.css';
import Toast from '../Toast';

const CartSideBar = (props) => {
  const { handleCloseCart } = props;
  const { listItem, setListItem, updateItemCart } = useCart();
  const { toast, setToast } = useToast();

  const onDeleteCartItem = (e) => {
    try {
      const idSelected = e.target.closest('.cart-item').id;
      const updateCarts = listItem.listProducts.filter(
        (cartItem) => cartItem.idProduct !== Number(idSelected),
      );

      const cartUser = {
        id: 1,
        listProducts: updateCarts,
      };

      setListItem(cartUser);
      updateItemCart(cartUser);

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

  const handleClose = () => {
    setToast({ ...toast, openPopup: false });
  };

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
            listItem.listProducts.map((item) => (
              <CartItem
                item={item}
                handleDeleteCartItem={onDeleteCartItem}
              />
            ))
        }
        </div>
      </div>
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

export default CartSideBar;
