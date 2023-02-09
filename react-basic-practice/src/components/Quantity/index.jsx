// Import react
import React, { useState } from 'react';

// Import component
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

// Import file css
import './index.css';

const Quantity = (props) => {
  const { isUnavailableProduct, onChangeQuantity, maxQuantity } = props;
  const [counter, setCounter] = useState(1);

  const incrementCount = () => {
    // Update state with incremented value
    if (counter < maxQuantity) {
      setCounter((preCounter) => preCounter + 1);
    }
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

  const validateNumber = (e) => {
    e.target.value = Math.max(0, e.target.value);
  };

  onChangeQuantity(counter);

  return (
    <div className="quantity-group">
      <Button
        onClick={decrementCount}
        className="btn btn-decrement"
        text="-"
        isDisabled={isUnavailableProduct}
      />
      <Input
        type="number"
        name="quantity"
        className="quantity"
        value={counter}
        handleInputChange={setQuantity}
        handleOnInput={validateNumber}
      />
      <Button
        onClick={incrementCount}
        className="btn btn-decrement"
        text="+"
        isDisabled={isUnavailableProduct}
      />
    </div>
  );
};

export default Quantity;
