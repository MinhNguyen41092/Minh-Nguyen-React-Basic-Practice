import React from 'react';
import './index.css';

const FormGroup = (props) => {
  const { handleSubmit, className, children } = props;
  return (
    <form
      className={`form ${className}`}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

export default FormGroup;