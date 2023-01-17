import React, { useState } from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import ListProducts from '@/components/ListProducts';
import Sidebar from '@/components/SideBar';
import './index.css';

const HomePage = () => {
  const [keyword, setKeyword] = useState('');
  const [order, setOrder] = useState('');
  const [fieldSort, setFieldSort] = useState('');
  const [valueSelected, setValueSelected] = useState('');

  const handleSearch = (value) => {
    setKeyword(value);
  };

  const handleSort = (value) => {
    setValueSelected(value);
    switch (value) {
      case 'name ascending':
        setFieldSort('name');
        setOrder('asc');
        break;
      case 'name decrease':
        setFieldSort('name');
        setOrder('desc');
        break;
      case 'price ascending':
        setFieldSort('price');
        setOrder('asc');
        break;
      default:
        setFieldSort('price');
        setOrder('desc');
    }
  };

  return (
    <DefaultLayout>
      <Sidebar
        onSearch={handleSearch}
        onSort={handleSort}
        valueSelected={valueSelected}
      />
      <ListProducts fieldSort={fieldSort} order={order} keyword={keyword} />
    </DefaultLayout>
  );
};

export default HomePage;
