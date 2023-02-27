// Import react
import React, { useState } from 'react';

// Import components
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import SelectGroup from '@/components/SelectGroup';

// Import file css
import './index.css';

const options = [
  { value: 'DEFAULT', label: 'Sort by' },
  { value: 'name asc', label: 'Name (ascending)' },
  { value: 'name desc', label: 'Name (descending )' },
  { value: 'price asc', label: 'Price (ascending)' },
  { value: 'price desc', label: 'Price (descending )' },
];

const Sidebar = (props) => {
  const { onSearch, onSort } = props;
  const [inputValue, setInputValue] = useState({});

  const handleInputValue = (value) => {
    setInputValue(value.keyword.trim());
  };

  const handleSearch = () => {
    onSearch(inputValue);
  };

  const handleSort = (value) => {
    onSort(value);
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar title">Shop The Latest</h2>
      <div className="search">
        <Input
          className="input-search"
          placeholder="Search..."
          handleInputChange={handleInputValue}
          handleInputKeyDown={handleSearch}
          name="keyword"
          eventKeyDown="Enter"
        />
        <Button
          typeButton="button"
          className="btn-search"
          icon="./src/assets/images/iconButton/btn-search.png"
          onClick={handleSearch}
        />
      </div>
      <SelectGroup options={options} handleSelectOptionChange={handleSort} />
    </div>
  );
};

export default Sidebar;
