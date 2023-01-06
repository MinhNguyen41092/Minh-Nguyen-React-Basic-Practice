import React, { useEffect, useState } from 'react';
import { getProductById } from '@/services/Products';
import DefaultLayout from '@/layouts/DefaultLayout';
import Quantity from '@/components/Quantity';
import Button from '@/components/common/Button';

import { useLoading } from '@/contexts/loading';

import './index.css';

const DetailProductPage = (props) => {
  const { id } = props;
  const { loading, setLoading } = useLoading();
  const [product, setProduct] = useState([]);

  const handleAddCart = () => {};

  const renderProduct = () => (
    product.map((field) => (
      <div className="product-main">
        <div className="product">
          <img className="product-image" src={field.image} alt="" />
          <div className="product-information">
            <span className="product-detail name">{field.name}</span>
            <span className="product-detail price">{`$ ${field.price}`}</span>
            <p className="product-detail description">{field.description}</p>
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
          <div className="product-detail title">
            Description
          </div>
          <div className="product-detail description">
            {field.description}
          </div>
        </div>
      </div>
    ))
  );

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        data ? setProduct(data) : setProduct([]);
      } catch {
        alert('Error loading data, please reload the page');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

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
                renderProduct()
              }
            </>
          )
      }
    </DefaultLayout>
  );
};

export default DetailProductPage;
