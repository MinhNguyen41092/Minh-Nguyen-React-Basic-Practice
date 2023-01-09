import React from 'react';
import './index.css';

const SelectGroup = (props) => {
  const { options } = props;
  const handleChangeOption = () => {};

  return (
    <select
      onChange={handleChangeOption}
      className="select-group"
    >
      <option value="" disabled selected hidden>Sort by</option>
      {
        options.map((option, key) => <option key={option} value={key}>{option}</option>)
      }
    </select>
  );
};

export default SelectGroup;
