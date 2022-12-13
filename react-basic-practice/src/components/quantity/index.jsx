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
    // Update state with decremented value
    if (counter > 0) {
      setCounter(counter - 1);
    }
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
