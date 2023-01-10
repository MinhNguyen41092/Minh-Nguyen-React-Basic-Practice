import React, { useState } from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import ListProducts from '@/components/ListProducts';
import Sidebar from '@/components/SideBar';
import './index.css';

const HomePage = () => {
  const [keyword, setKeyword] = useState('');
  // const [order, setOrder] = useState('');
  // const [fieldSort, setFieldSort] = useState('');

  const handleSearch = (value) => {
    setKeyword(value);
  };

  const handleSort = (value) => {
    console.log(value);
  };

  return (
    <DefaultLayout>
      <Sidebar
        onSearch={handleSearch}
        onSort={handleSort}
      />
      <ListProducts keyword={keyword} />
    </DefaultLayout>
  );
};

export default HomePage;
