import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const ProductCard = (props) => {
  const { product } = props;

  /**
   * Show label if the product is out of stock or discount
   *
   * @param {*} quantity available of product
   * @param {*} discountPercent of product
   *
   * @returns component label
   */
  const renderLabel = (quantity, discountPercent) => {
    if (product.quantity <= 0 || product.discountPercent > 0) {
      return (
        <span className="product-label">
          {quantity === 0 ? 'Sold out' : `- ${discountPercent} %`}
        </span>
      );
    }
    return '';
  };

  return (
    <article className={`product-card ${product.id}`}>
      {renderLabel(product.quantity, product.discountPercent)}
      <Link to={`/products/${product.id}`} key={product.id}>
        <div className="img-wrapper">
          <img className="img-product" src={product.image} alt="product" />
        </div>
        <h4 className="name">{product.name}</h4>
      </Link>
      <span className="price">{`$ ${product.price.toFixed(2)}`}</span>
    </article>
  );
};

export default ProductCard;
