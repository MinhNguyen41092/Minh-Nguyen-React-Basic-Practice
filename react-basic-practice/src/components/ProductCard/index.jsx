import React from 'react';
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
      <img className="img" src={product.image} alt="product" />
      <h4 className="name">{product.name}</h4>
      <span className="price">{`$ ${product.price.toFixed(2)}`}</span>
    </article>
  );
};

export default ProductCard;
