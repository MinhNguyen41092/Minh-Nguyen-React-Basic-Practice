import './index.css';
import React from 'react';

const Button = (props) => {
  const { onClick, className, text, icon } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      value="button"
    >
      { text ? text : <img className="icon" src={icon} alt="icon" />}
    </button>
  );
}

export { Button };
