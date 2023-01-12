import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '@/services/Products';
import { updateCart, getCartByUserId } from '@/services/Cart';
import DefaultLayout from '@/layouts/DefaultLayout';
import Quantity from '@/components/Quantity';
import Button from '@/components/common/Button';
import Toast from '@/components/Toast';

import { useLoading } from '@/contexts/LoadingProvider';
import { useToast } from '@/contexts/ToastProvider';

import './index.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const { loading, setLoading } = useLoading();
  const [product, setProduct] = useState({});
  const [quantityProduct, setQuantity] = useState(0);
  const { toast, setToast } = useToast();

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
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast({ ...toast, openPopup: false });
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast.openPopup]);

  const handleSetQuantity = (value) => {
    setQuantity(value);
  };

  const handleAddCart = async () => {
    try {
      const dataCart = await getCartByUserId(1);

      const cartUser = {
        id: 1,
        listProducts: [
          ...dataCart.listProducts,
          {
            idProduct: product.id,
            quantity: quantityProduct,
            name: product.name,
            price: product.price,
          }],
      };

      updateCart(1, cartUser);

      setToast({
        openPopup: true,
        status: 'success',
        message: 'The item added to your shopping bag',
      });
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
      {
        loading
          ? (
            <p className="loading">Loading...</p>
          )
          : (
            <div className="product-main">
              <div className="product">
                <img className="image" src={product.image} alt={product.name} />
                <div className="information">
                  <span className="name">{product.name}</span>
                  <span className="price">{`$ ${product.price}`}</span>
                  <p className="description">{product.description}</p>
                  {
                    (product.label === 'Sold out')
                      ? (
                        <div className="add-cart">
                          <Quantity status />
                          <Button
                            type="button"
                            onClick={handleAddCart}
                            className="btn-primary btn-large"
                            text="add to cart"
                            status
                          />
                        </div>
                      )
                      : (
                        <div className="add-cart">
                          <Quantity quantity={handleSetQuantity} />
                          <Button
                            type="button"
                            onClick={handleAddCart}
                            className="btn-primary btn-large"
                            text="add to cart"
                          />
                        </div>
                      )
                        }
                </div>
              </div>
              <div className="product-description">
                <div className="title">
                  Description
                </div>
                <div className="description">
                  {product.description}
                </div>
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
    </DefaultLayout>
  );
};

export default ProductDetail;
