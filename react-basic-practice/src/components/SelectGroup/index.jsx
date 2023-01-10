import React from 'react';
import './index.css';

const SelectGroup = (props) => {
  const { options, handleSelectOptionChange } = props;
  const handleChangeOption = (e) => {
    handleSelectOptionChange(e.target.value);
  };

  return (
    <select
      onChange={handleChangeOption}
      className="select-group"
    >
      <option value="" disabled selected hidden>Sort by</option>
      {
        options.map((option) => <option key={option} value={option}>{option}</option>)
      }
    </select>
  );
};

export default SelectGroup;
