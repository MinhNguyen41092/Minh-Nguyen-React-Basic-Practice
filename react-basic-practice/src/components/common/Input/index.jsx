import React, { useRef } from 'react';
import './index.css';

const Input = (props) => {
  const {
    label,
    htmlFor,
    inputType,
    name,
    cssClasses,
    value,
    placeholder,
    pattern,
    defaultValue,
    handleInput,
    messageErr,
  } = props;

  const inputRef = useRef();

  const handleChange = (e) => {
    const inputValue = { [e.target.name]: inputRef.current.value };

    handleInput(inputValue);
  };

  return (
    <div className="input-group">
      <label htmlFor={htmlFor}>
        {label}
      </label>
      <input
        type={inputType}
        name={name}
        className={`input-text ${cssClasses}`}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
        defaultValue={defaultValue}
        ref={inputRef}
      />
      {messageErr && (
        <span className="input-error">
          {messageErr}
        </span>
      )}
    </div>
  );
};

export default Input;
