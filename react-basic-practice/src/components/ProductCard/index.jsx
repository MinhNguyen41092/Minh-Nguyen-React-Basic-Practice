import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const ProductCard = (props) => {
  const { product } = props;

  const showLabel = (quantity, discountPercent) => {
    const label = {
      haveLabel: false,
      content: '',
    };

    if (!quantity) {
      label.content = 'Sold out';
      label.haveLabel = true;
    } else if (discountPercent) {
      label.content = `${product.discountPercent} %`;
      label.haveLabel = true;
    }
    return label;
  };

  return (
    <article className={`product-card ${product.id}`}>
      {showLabel(product.quantity, product.discountPercent).haveLabel && (
        <span className="product-label">
          {showLabel(product.quantity, product.discountPercent).content}
        </span>
      )}
      <Link to={`/products/${product.id}`} key={product.id}>
        <img className="img" src={product.image} alt="product" />
        <h4 className="name">{product.name}</h4>
      </Link>
      <span className="price">{`$ ${product.price.toFixed(2)}`}</span>
    </article>
  );
};

export default ProductCard;
