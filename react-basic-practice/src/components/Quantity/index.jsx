import React, { useState } from 'react';
import Button from '../common/Button';
import './index.css';

const Quantity = (props) => {
  const { status, quantity } = props;
  const [counter, setCounter] = useState(1);

  const incrementCount = () => {
    // Update state with incremented value
    setCounter((preCounter) => preCounter + 1);
  };

  const decrementCount = () => {
    // Update state with decremented value
    if (counter > 0) {
      setCounter((preCounter) => preCounter - 1);
    }
  };

  quantity(counter);

  return (
    <div className="quantity-group">
      <Button
        onClick={decrementCount}
        className="btn btn-decrement"
        text="-"
        status={status || ''}
      />
      <p className="quantity">{counter}</p>
      <Button
        onClick={incrementCount}
        className="btn btn-decrement"
        text="+"
        status={status || ''}
      />
    </div>
  );
};

export default Quantity;
