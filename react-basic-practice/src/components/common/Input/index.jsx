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
  } = props;

  const inputRef = useRef();

  const handleChange = (e) => {
    const inputValue = { [e.target.name]: inputRef.current.value };

    handleInputChange(inputValue);
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
        ref={inputRef}
      />
      {errorMessage && <span className="input-error">{errorMessage}</span>}
    </div>
  );
};

export default Input;
