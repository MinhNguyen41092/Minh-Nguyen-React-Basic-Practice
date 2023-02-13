// Import react
import React from 'react';

// Import component
import Button from '@/components/common/Button';
import CartItem from '@/components/CartItem';
import Toast from '@/components/Toast';
import LoadingSpinner from '@/components/common/LoadingSpinner';

// Import image
import closeButton from '@/assets/images/iconButton/btn-close.png';

// Import context
import { useCart } from '@/contexts/CartProvider';
import { useToast } from '@/contexts/ToastProvider';
import { updateCart } from '@/services/Cart';
import { useAuth } from '@/contexts/AuthProvider';

// Import file css
import './index.css';
import { useLoading } from '@/contexts/LoadingProvider';

const CartSideBar = (props) => {
  const { onCloseCart } = props;
  const { cart, setCart } = useCart();
  const { toast, setToast } = useToast();
  const { loading, setLoading } = useLoading();
  const { userData } = useAuth();

  const handleDeleteCartItem = async (e) => {
    try {
      setLoading(true);
      const idSelected = Number(e.target.closest('.cart-item').dataset.id);
      const updateCarts = cart.products.filter((cartItem) => cartItem.idProduct !== idSelected);

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
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setToast({ ...toast, openPopup: false });
  };

  const totalCart = () => {
    let totalBill = 0;
    cart.products.forEach((item) => {
      const totalItem = item.price * item.quantity;
      totalBill += totalItem;
    });
    return totalBill.toFixed(2);
  };

  return (
    <aside className="cart-bar">
      {loading && <LoadingSpinner />}
      <div className="main">
        <div className="header">
          <h2 className="title">Shopping bag</h2>
          <Button
            onClick={onCloseCart}
            typeButton="button"
            className="btn btn-close"
            icon={closeButton}
          />
        </div>
        <div className="list-cart-item">
          {cart.products.map((item) => (
            <CartItem
              key={item.idProduct}
              item={item}
              handleDeleteCartItem={handleDeleteCartItem}
            />
          ))}
        </div>
        <div className="footer">
          <p className="total">{`Total: $ ${totalCart()}`}</p>
        </div>
      </div>
      {toast.openPopup && (
        <Toast status={toast.status} message={toast.message} onClose={handleClose} />
      )}
    </aside>
  );
};

export default CartSideBar;
