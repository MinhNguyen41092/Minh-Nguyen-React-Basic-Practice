import React from 'react';

const Social = (props) => {
  const { path, className, size, handleClick, children } = props;
  return (
    <Link
      to={path}
      className={`btn-social btn-social-${size} ${className}`}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

export default Social;
