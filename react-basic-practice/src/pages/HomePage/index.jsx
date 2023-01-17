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
    const param = value.split(' ');
    setFieldSort(param[0]);
    setOrder(param[1]);
    setValueSelected(value);
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
