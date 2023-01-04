import React from 'react';
import './index.css';

const Grid = (props) => {
  const {
    columns, columnGap, rowGap, children,
  } = props;
  const className = `
    grid-container 
    grid-columns-${columns} 
    grid-columns-gap-${columnGap} 
    grid-rows-gap-${rowGap}
  `;

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Grid;
