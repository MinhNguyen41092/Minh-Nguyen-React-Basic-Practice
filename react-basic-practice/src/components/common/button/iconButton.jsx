import React from 'react';

function IconButton(props) {
  const {
    onClick, className, icon, iconName,
  } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      <figure className={iconName}>
        <img className="icon" src={icon} alt={iconName} />
      </figure>
    </button>
  );
}

export default IconButton;
