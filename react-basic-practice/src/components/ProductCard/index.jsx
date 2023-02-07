import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const ProductCard = (props) => {
  const { product } = props;
  let label = '';

  const showLabel = () => {
    let haveLabel = false;
    if (!product.quantity) {
      label = 'Sold out';
      haveLabel = true;
    } else if (product.discountPercent) {
      label = `${product.discountPercent} %`;
      haveLabel = true;
    }
    return haveLabel;
  };

  return (
    <article className={`product-card ${product.id}`}>
      {showLabel() && <span className="product-label">{label}</span>}
      <Link to={`/products/${product.id}`} key={product.id}>
        <img className="img" src={product.image} alt="product" />
        <h4 className="name">{product.name}</h4>
      </Link>
      <span className="price">{`$ ${product.price.toFixed(2)}`}</span>
    </article>
  );
};

export default ProductCard;
