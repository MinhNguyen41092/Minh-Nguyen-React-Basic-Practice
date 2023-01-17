import React from 'react';
import './index.css';

const SelectGroup = (props) => {
  const { options, handleSelectOptionChange, valueSelected } = props;
  const onChangeOption = (e) => {
    handleSelectOptionChange(e.target.value);
  };

  return (
    <select
      onChange={onChangeOption}
      className="select-group"
      value={valueSelected}
    >
      <option value="default" disabled selected hidden>Sort by</option>
      {
        options.map(
          (option) => <option key={option.value} value={option.value}>{option.label}</option>
        )
      }
    </select>
  );
};

export default SelectGroup;
