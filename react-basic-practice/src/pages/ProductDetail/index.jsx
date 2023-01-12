import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '@/services/Products';
import { updateCart, getCartByUserId } from '@/services/Cart';
import DefaultLayout from '@/layouts/DefaultLayout';
import Quantity from '@/components/Quantity';
import Button from '@/components/common/Button';
import Popup from '@/components/Popup';

import { useLoading } from '@/contexts/LoadingProvider';
import { useToast } from '@/contexts/ToastProvider';

import './index.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const { loading, setLoading } = useLoading();
  const [product, setProduct] = useState([]);
  const [quantityProduct, setQuantity] = useState(0);
  const { toast, setToast } = useToast();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getProductById(productId);
        data ? setProduct(data) : setProduct([]);
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
      setToast((preToast) => ({
        ...preToast,
        openPopup: false,
      }));
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast.openPopup]);

  const handleSetQuantity = (value) => {
    setQuantity(value);
  };

  const handleAddCart = async () => {
    let productAddCart = [];
    try {
      const dataCart = await getCartByUserId(1);
      product.forEach((field) => {
        productAddCart = [
          ...dataCart.listProducts,
          {
            idProduct: field.id,
            quantity: quantityProduct,
            name: field.name,
            price: field.price,
          }];
      });
      const cartUser = {
        id: 1,
        listProducts: productAddCart,
      };

      updateCart(1, cartUser);

      setToast((preToast) => ({
        ...preToast,
        status: true,
        message: 'The item added to your shopping bag',
      }));
    } catch {
      setToast((preToast) => ({
        ...preToast,
        status: false,
        message: 'Add to cart failed, please try again',
      }));
    } finally {
      setToast((preToast) => ({
        ...preToast,
        openPopup: true,
      }));
    }
  };

  const handleClose = () => {
    setToast((preToast) => ({
      ...preToast,
      openPopup: false,
    }));
  };

  return (
    <DefaultLayout>
      {
        loading
          ? (
            <p className="loading">Loading...</p>
          )
          : (
            <>
              {
                product.map((field) => (
                  <div className="product-main">
                    <div className="product">
                      <img className="image" src={field.image} alt={field.name} />
                      <div className="information">
                        <span className="name">{field.name}</span>
                        <span className="price">{`$ ${field.price}`}</span>
                        <p className="description">{field.description}</p>
                        {
                          (field.label === 'Sold out')
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
                        {field.description}
                      </div>
                    </div>
                  </div>
                ))
              }
            </>
          )
      }
      {
        toast.openPopup
        && (
        <Popup
          isSuccess={toast.status}
          message={toast.message}
          onClose={handleClose}
        />
        )
      }
    </DefaultLayout>
  );
};

export default ProductDetail;
