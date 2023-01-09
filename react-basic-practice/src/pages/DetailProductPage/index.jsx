import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '@/services/Products';
import DefaultLayout from '@/layouts/DefaultLayout';
import Quantity from '@/components/Quantity';
import Button from '@/components/common/Button';

import { useLoading } from '@/contexts/loading';

import './index.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const { loading, setLoading } = useLoading();
  const [product, setProduct] = useState([]);

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

  const handleAddCart = () => {};

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
                        <div className="add-cart">
                          <Quantity />
                          <Button
                            type="button"
                            onClick={handleAddCart}
                            className="btn-primary btn-large"
                            text="add to cart"
                          />
                        </div>
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
