import React from 'react';
import './index.css';

const ProductCard = (props) => {
  const { product } = props;
  return (
    <article className={`product-card ${product.id}`}>
      {
        product.label && <span className="product-label">{product.label}</span>
      }
      <img className="img" src={product.image} alt="product" />
      <h4 className="name">{product.name}</h4>
      <span className="price">{`$ ${product.price}`}</span>
    </article>
  );
};

export default ProductCard;
