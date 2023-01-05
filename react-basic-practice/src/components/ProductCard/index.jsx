import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const ProductCard = (props) => {
  const { product } = props;
  return (
    <article key={product.id} className={`product-card ${product.id}`}>
      <Link
        to="/"
        className=""
      >
        {
          product.label && <span className="product-label">{product.label}</span>
        }
        <img className="product-detail img" src={product.image} alt="" />
        <span className="product-detail name">{product.name}</span>
        <span className="product-detail price">{`$ ${product.price}`}</span>
      </Link>
    </article>
  );
};

export default ProductCard;
