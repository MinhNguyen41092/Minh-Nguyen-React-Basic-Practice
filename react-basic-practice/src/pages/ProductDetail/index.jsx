// Import react
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Import components
import DefaultLayout from '@/layouts/DefaultLayout';
import Quantity from '@/components/Quantity';
import Button from '@/components/common/Button';
import Toast from '@/components/Toast';
import LoadingSpinner from '@/components/common/LoadingSpinner';

// Import service
import { getProductById } from '@/services/Products';
import { updateCart } from '@/services/Cart';

// Import context
import { useLoading } from '@/contexts/LoadingProvider';
import { useToast } from '@/contexts/ToastProvider';
import { useAuth } from '@/contexts/AuthProvider';
import { useCart } from '@/contexts/CartProvider';

// Import file css
import './index.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const { loading, setLoading } = useLoading();
  const [product, setProduct] = useState({});
  const [quantityProductsOrdered, setQuantityProductsOrdered] = useState(0);
  const { toast, setToast } = useToast();
  const { cart, setCart } = useCart();
  const { userData } = useAuth();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getProductById(productId);
        data ? setProduct(data) : setProduct({});
      } catch {
        alert('Error loading data, please reload the page');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [productId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast({ ...toast, openPopup: false });
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast.openPopup]);

  const handleSetQuantity = (value) => {
    setQuantityProductsOrdered(Number(value));
  };

  const setPrice = () => {
    let price = 0;

    product.discountPercent
      ? (price = product.price - product.price * (product.discountPercent / 100))
      : (price = product.price);

    return price.toFixed(2);
  };

  const handleAddCart = async () => {
    try {
      let cartUser = {};
      const indexProduct = cart?.products?.findIndex(
        (item) => item.idProduct === Number(productId)
      );

      setLoading(true);
      if (quantityProductsOrdered && quantityProductsOrdered < product.quantity) {
        if (indexProduct >= 0) {
          cart.products[indexProduct].quantity += quantityProductsOrdered;
          cartUser = cart;
        } else {
          cartUser = {
            id: userData.userId,
            products: [
              ...cart.products,
              {
                idProduct: product.id,
                quantity: quantityProductsOrdered,
                name: product.name,
                price: setPrice(),
                discountPercent: product.discountPercent,
              },
            ],
          };
        }

        setCart(cartUser);
        await updateCart(userData.userId, cartUser);

        setToast({
          openPopup: true,
          status: 'success',
          message: 'The item has been added to your shopping bag.',
        });
      } else {
        setToast({
          openPopup: true,
          status: 'error',
          message: 'Invalid quantity',
        });
      }
      setLoading(false);
    } catch {
      setToast({
        openPopup: true,
        status: 'error',
        message: 'Add to cart failed, please try again',
      });
    }
  };

  const handleClose = () => {
    setToast({ ...toast, openPopup: false });
  };

  return (
    <DefaultLayout>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="product-main">
          <div className="product">
            <img className="image" src={product.image} alt={product.name} />
            <div className="information">
              <span className="name">{product.name}</span>
              <span className="price">{`$ ${product?.price?.toFixed(2)}`}</span>
              <p className="description">{product.description}</p>
              <div className="add-cart">
                <Quantity
                  onChangeQuantity={() => handleSetQuantity}
                  isUnavailableProduct={!product.quantity}
                  maxQuantity={product.quantity}
                />
                <Button
                  type="button"
                  onClick={handleAddCart}
                  className="btn-primary btn-large"
                  text="add to cart"
                  isDisabled={!product.quantity}
                />
              </div>
            </div>
          </div>
          <div className="product-description">
            <p className="title">Description</p>
            <p className="description">{product.description}</p>
          </div>
        </div>
      )}
      {toast.openPopup && (
        <Toast status={toast.status} message={toast.message} onClose={handleClose} />
      )}
    </DefaultLayout>
  );
};

export default ProductDetail;
