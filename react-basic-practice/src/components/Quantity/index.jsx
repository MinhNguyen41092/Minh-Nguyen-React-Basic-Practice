// Import react
import React, { useState } from 'react';

// Import component
import Button from '../common/Button';
import Input from '../common/Input';

// Import file css
import './index.css';

const Quantity = (props) => {
  const { isUnavailableProduct, onChangeQuantity, limitQuantity } = props;
  const [counter, setCounter] = useState(1);

  const incrementCount = () => {
    // Update state with incremented value
    if (counter < limitQuantity) {
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
