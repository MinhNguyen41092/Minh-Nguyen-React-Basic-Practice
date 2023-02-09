// Import react
import React from 'react';

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
  const handleSearch = (value) => {
    onSearch(value.keyword.trim());
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
      <SelectGroup options={options} handleSelectOptionChange={handleSort} />
    </div>
  );
};

export default Sidebar;
