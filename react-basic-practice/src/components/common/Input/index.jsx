import React, { useRef } from 'react';
import './index.css';

const Input = (props) => {
  const {
    label,
    htmlFor,
    type,
    name,
    className,
    value,
    placeholder,
    pattern,
    defaultValue,
    handleInputChange,
    errorMessage,
  } = props;

  const inputRef = useRef();

  const handleChange = (e) => {
    const inputValue = { [e.target.name]: inputRef.current.value };

    handleInputChange(inputValue);
  };

  return (
    <div className="input-group">
      <label htmlFor={htmlFor}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={`input-text ${className}`}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
        defaultValue={defaultValue}
        ref={inputRef}
      />
      {errorMessage && (
      <span className="input-error">
        {errorMessage}
      </span>
      )}
    </div>
  );
};

export default Input;
