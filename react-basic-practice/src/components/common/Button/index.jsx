import React from 'react';
import './index.css';

const Button = (props) => {
  const {
    type, onClick, className, text, icon, status,
  } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className}`}
      value="button"
      disabled={status}
    >
      { text || <img className="icon" src={icon} alt="icon" />}
    </button>
  );
};

export default Button;
