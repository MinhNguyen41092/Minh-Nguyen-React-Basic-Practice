import React from 'react';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import SelectGroup from '@/components/SelectGroup';
import './index.css';

const options = [
  { value: 'name ascending', label: 'Name (ascending)' },
  { value: 'name decrease', label: 'Name (decrease)' },
  { value: 'price ascending', label: 'Price (ascending)' },
  { value: 'price decrease', label: 'Price (decrease)' },
];

const Sidebar = (props) => {
  const { onSearch, onSort } = props;
  const handleSearch = (value) => {
    onSearch(value.keyword);
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
          handleInputChange={handleSearch}
          name="keyword"
        />
        <Button
          type="button"
          className="btn-search"
          icon="./src/assets/images/iconButton/btn-search.png"
          onClick={handleSearch}
        />
      </div>
      <SelectGroup
        options={options}
        handleSelectOptionChange={handleSort}
      />
    </div>
  );
};

export default Sidebar;
