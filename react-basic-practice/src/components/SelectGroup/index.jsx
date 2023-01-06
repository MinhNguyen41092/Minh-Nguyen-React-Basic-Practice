import React from 'react';
import './index.css';

const SelectGroup = (props) => {
  const { options } = props;
  const handleChangeOption = (e) => { console.log(e); };

  return (
    <select
      onChange={(e) => handleChangeOption(e)}
      className="select-group"
    >
      <option value="" disabled selected hidden>Sort by</option>
      {
        options.map((option, key) => <option value={key}>{option}</option>)
      }
    </select>
  );
};

export default SelectGroup;
