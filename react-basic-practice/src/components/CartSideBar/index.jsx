// Import react
import React from 'react';

// Import component
import Button from '../common/Button';
import CartItem from '../CartItem';
import Toast from '../Toast';

// Import image
import closeButton from '@/assets/images/iconButton/btn-close.png';

// Import context
import { useCart } from '@/contexts/CartProvider';
import { useToast } from '@/contexts/ToastProvider';
import { updateCart } from '@/services/Cart';
import { useAuth } from '@/contexts/AuthProvider';

// Import file css
import './index.css';

const CartSideBar = (props) => {
  const { onCloseCart } = props;
  const { cart, setCart } = useCart();
  const { toast, setToast } = useToast();
  const { userData } = useAuth();

  const handleDeleteCartItem = async (e) => {
    try {
      const idSelected = e.target.closest('.cart-item').dataset.id;
      const updateCarts = cart.products.filter(
        (cartItem) => cartItem.idProduct !== Number(idSelected),
      );

      const cartUser = {
        id: userData.userId,
        products: updateCarts,
      };

      setCart(cartUser);
      await updateCart(userData.userId, cartUser);

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
            onClick={onCloseCart}
            type="button"
            className="btn btn-close"
            icon={closeButton}
          />
        </div>
        <div className="list-cart-item">
          {
            cart.products.map((item) => (
              <CartItem
                key={item.idProduct}
                item={item}
                handleDeleteCartItem={handleDeleteCartItem}
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
