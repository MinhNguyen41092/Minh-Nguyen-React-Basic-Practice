import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const ProductCard = (props) => {
  const { product } = props;

  // Show label if the product is out of stock or discount
  const renderLabel = (quantity, discountPercent) => {
    let label = '';
    if (quantity === 0) {
      label = 'Sold out';
    } else {
      label = `${discountPercent} %`;
    }
    return <span className="product-label">{label}</span>;
  };

  return (
    <article className={`product-card ${product.id}`}>
      {(product.quantity <= 0 || product.discountPercent > 0) &&
        renderLabel(product.quantity, product.discountPercent)}
      <Link to={`/products/${product.id}`} key={product.id}>
        <img className="img" src={product.image} alt="product" />
        <h4 className="name">{product.name}</h4>
      </Link>
      <span className="price">{`$ ${product.price.toFixed(2)}`}</span>
    </article>
  );
};

export default ProductCard;
