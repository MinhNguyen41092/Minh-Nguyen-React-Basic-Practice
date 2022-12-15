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
    refer,
    onChange,
    placeholder,
    pattern,
    defaultValue,
  } = props;

  return (
    <div className="input-group">
      <label htmlFor={htmlFor}>
        {label}
      </label>
      <input
        type={inputType}
        id={inputId}
        className={`input-text ${cssClasses}`}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
        defaultValue={defaultValue}
        ref={refer}
      />
    </div>
  );
};

export default Input;
