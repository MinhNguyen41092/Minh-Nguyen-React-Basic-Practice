// Import react
import React, { useState } from 'react';

// Import component
import Button from '../common/Button';
import Input from '../common/Input';

// Import file css
import './index.css';

const Quantity = (props) => {
  const { statusButton, getQuantity } = props;
  const [counter, setCounter] = useState(1);

  const incrementCount = () => {
    // Update state with incremented value
    setCounter((preCounter) => preCounter + 1);
  };

  const decrementCount = () => {
    // Update state with decremented value
    if (counter > 1) {
      setCounter((preCounter) => preCounter - 1);
    }
  };

  const setQuantity = (value) => {
    setCounter(value.quantity);
  };

  // Check product ready status then set status for button
  if (!statusButton) {
    getQuantity(counter);
  }

  return (
    <div className="quantity-group">
      <Button
        onClick={decrementCount}
        className="btn btn-decrement"
        text="-"
        isDisabled={statusButton}
      />
      <Input
        name="quantity"
        className="quantity"
        value={counter}
        handleInputChange={setQuantity}
      />
      <Button
        onClick={incrementCount}
        className="btn btn-decrement"
        text="+"
        isDisabled={statusButton}
      />
    </div>
  );
};

export default Quantity;
