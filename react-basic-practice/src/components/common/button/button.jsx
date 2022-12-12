import './index.css';
import React from 'react';

const Button = (props) => {
  const { onClick, className, text } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn ${className}`}
    >
      {text}
    </button>
  );
}

export { Button };
