import React from 'react';
import './index.css';

const Button = (props) => {
  const {
    type, onClick, className, text, icon, isDisabled,
  } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className}`}
      value="button"
      disabled={isDisabled}
    >
      { text || <img className="icon" src={icon} alt="icon" />}
    </button>
  );
};

export default Button;
