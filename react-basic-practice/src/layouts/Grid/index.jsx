import React from 'react';
import './index.css';

const buildGridClassNames = (columns, columnGap, rowGap) => `grid-container 
  grid-columns-${columns} 
  grid-columns-gap-${columnGap} 
  grid-rows-gap-${rowGap}
  `;

const Grid = (props) => {
  const {
    columns, columnGap, rowGap, children,
  } = props;

  return (
    <div className={buildGridClassNames(columns, columnGap, rowGap)}>
      {children}
    </div>
  );
};

export default Grid;
