import React from 'react';
import './index.css';

const ProductCard = (props) => {
  const { product } = props;
  return (
    <article className={`product-card ${product.id}`}>
      {
        product.label && <span className="product-label">{product.label}</span>
      }
      <img className="product-card img" src={product.image} alt="" />
      <span className="product-card name">{product.name}</span>
      <span className="product-card price">{`$ ${product.price}`}</span>
    </article>
  );
};

export default ProductCard;
