import React, { useState } from 'react';
import { Button } from '../common/button/index';
import './index.css';

const Quantity = () => {
  const [counter, setCounter] = useState(0);
  const incrementCount = () => {
    // Update state with incremented value
    setCounter(counter + 1);
  };

  const decrementCount = () => {
    // Update state with incremented value
    setCounter((count) => Math.max(count - 1, 0));
  };

  return (
    <div className="quantity-group">
      <Button onClick={decrementCount} className="btn-decrement" text="-" />
      <p className="quantity">{counter}</p>
      <Button onClick={incrementCount} className="btn-decrement" text="+" />
    </div>
  );
};

export { Quantity };
