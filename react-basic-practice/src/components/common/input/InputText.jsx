import React from 'react';
import './index.css';

const Input = (props) => {
  const {
    label,
    htmlFor,
    idInput,
    classNameInput,
    value,
    onChange,
    placeholder,
  } = props;
  return (
    <div className="input-cover">
      <label htmlFor={htmlFor}>
        {label}
      </label>
      <input
        type="text"
        id={idInput}
        className={classNameInput}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
