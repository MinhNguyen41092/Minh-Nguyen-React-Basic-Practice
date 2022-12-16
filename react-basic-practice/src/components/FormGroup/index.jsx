import React from 'react';

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
