import React from 'react';
import './index.css';

const Button = (props) => {
  const {
    typeButton, onClick, className, text, icon, isDisabled,
  } = props;

  return (
    <button
      type={typeButton}
      onClick={onClick}
      className={`btn ${className}`}
      value="button"
      disabled={isDisabled}
    >
      {text || <img className="icon" src={icon} alt="icon" />}
    </button>
  );
};

export default Button;
