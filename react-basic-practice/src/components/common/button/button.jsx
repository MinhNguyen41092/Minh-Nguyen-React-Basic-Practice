import React from 'react';

import './index.css';

function Button(props) {
  const { onClick, className, text } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {text}
    </button>
  );
}

export default Button;
