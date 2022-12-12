import React from 'react';
import './index.css';

const Input = (props) => {
  const {
    label,
    htmlFor,
    inputType,
    inputId,
    cssClasses,
    value,
    onChange,
    placeholder,
    size,
  } = props;

  return (
    <div className="input-group">
      <label htmlFor={htmlFor}>
        {label}
      </label>
      <input
        type={inputType}
        id={inputId}
        className={`input-text ${cssClasses} input-${size}`}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
