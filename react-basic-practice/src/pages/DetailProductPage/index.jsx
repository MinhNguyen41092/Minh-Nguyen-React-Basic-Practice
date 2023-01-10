import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '@/services/Products';
import { updateCart, getCartByUserId } from '@/services/Cart';
import DefaultLayout from '@/layouts/DefaultLayout';
import Quantity from '@/components/Quantity';
import Button from '@/components/common/Button';

import { useLoading } from '@/contexts/loading';

import './index.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const { loading, setLoading } = useLoading();
  const [product, setProduct] = useState([]);
  const [quantityProduct, setQuantity] = useState(0);

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

  const handleSetQuantity = (value) => {
    setQuantity(value);
  };

  const handleAddCart = () => {
    let productAddCart = {};
    product.forEach((field) => {
      productAddCart = {
        idProduct: field.id,
        quantity: quantityProduct,
        name: field.name,
        price: field.price,
      };
    });

    const cartUser = {
      id: 1,
      listProducts: [{ productAddCart }],
    };

    updateCart(1, cartUser);
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
    </DefaultLayout>
  );
};

export default ProductDetail;
