import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const { product } = props;
  return (
    <div className="product-card item">
      <Link
        // to={`/post/${product.id}`}
        to="/"
        className="product-detail"
      >
        <img className="product img" src={product.img} alt="" />
        <span className="product name">{product.price}</span>
        <span className="product price">{`$ ${product.detail},00`}</span>
      </Link>
    </div>
  );
};

export default ProductCard;
