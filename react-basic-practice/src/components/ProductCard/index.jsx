import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const ProductCard = (props) => {
  const { product } = props;
  return (
    <article className={`product-card ${product.id}`}>
      {
        product.label && <span className="product-label">{product.label}</span>
      }
      <Link
        to="/"
        className="product-detail"
      >
        <img className="product-detail img" src={product.img} alt="" />
        <span className="product-detail name">{product.name}</span>
        <span className="product-detail price">{`$ ${product.price}`}</span>
      </Link>
    </article>
  );
};

export default ProductCard;
