import React, { useState } from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import ListProducts from '@/components/ListProducts';
import Sidebar from '@/components/SideBar';
import './index.css';

const HomePage = () => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = (value) => {
    setKeyword(value);
  };

  return (
    <DefaultLayout>
      <Sidebar onSearch={handleSearch} />
      <ListProducts keyword={keyword} />
    </DefaultLayout>
  );
};

export default HomePage;
