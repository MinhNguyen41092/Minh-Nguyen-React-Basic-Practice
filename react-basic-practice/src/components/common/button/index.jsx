import './index.css';
import React from 'react';

const Button = (props) => {
  const {
    onClick, className, text, icon, size,
  } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn btn-${size} ${className}`}
      value="button"
    >
      { text || <img className="icon" src={icon} alt="icon" />}
    </button>
  );
};

export default Button;
