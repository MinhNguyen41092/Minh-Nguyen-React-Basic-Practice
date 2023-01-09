import React from 'react';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import SelectGroup from '@/components/SelectGroup';
import './index.css';

const options = [
  'Name',
  'Price',
];

const Sidebar = (props) => {
  const { onSearch } = props;
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar title">Shop The Latest</h2>
      <div className="search">
        <Input className="input-search" placeholder="Search..." onChange={handleSearch} />
        <Button
          type="button"
          className="btn-search"
          icon="./src/assets/images/iconButton/btn-search.png"
          onClick={handleSearch}
        />
      </div>
      <SelectGroup options={options} />
    </div>
  );
};

export default Sidebar;
