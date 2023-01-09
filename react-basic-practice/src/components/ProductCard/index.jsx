import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const ProductCard = (props) => {
  const { product } = props;
  return (
    <article className={`product-card ${product.id}`}>
      <Link
        to="/"
        className=""
      >
        {
          product.label && <span className="product-label">{product.label}</span>
        }
        <img className="product-card img" src={product.image} alt="" />
        <span className="product-card name">{product.name}</span>
        <span className="product-card price">{`$ ${product.price}`}</span>
      </Link>
    </article>
  );
};

export default ProductCard;
