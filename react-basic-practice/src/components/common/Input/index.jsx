import React, { useRef } from 'react';
import './index.css';

const Input = (props) => {
  const {
    label,
    htmlFor,
    inputType,
    name,
    className,
    value,
    placeholder,
    pattern,
    defaultValue,
    handleInputChange,
    errorMessage,
    handleOnInput,
    handleInputKeyDown,
    eventKeyDown,
  } = props;

  const handleChange = (e) => {
    const inputValue = { [e.target.name]: e.target.value };

    handleInputChange(inputValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === eventKeyDown) {
      handleInputKeyDown(event.target.value);
    }
  };

  return (
    <div className="input-group">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={inputType}
        name={name}
        className={`input-text ${className}`}
        onChange={handleChange}
        onInput={handleOnInput}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
        defaultValue={defaultValue}
        onKeyDown={handleKeyDown}
      />
      {errorMessage && <span className="input-error">{errorMessage}</span>}
    </div>
  );
};

export default Input;
