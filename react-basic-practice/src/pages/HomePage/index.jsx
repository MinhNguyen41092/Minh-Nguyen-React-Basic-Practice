import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import ListProducts from '@/components/ListProducts';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import './index.css';

const HomePage = () => (
  <DefaultLayout>
    <div className="sidebar">
      <h2 className="sidebar title">Shop The Latest</h2>
      <div className="seach">
        <Input className="input-search" placeholder="Search..." />
        <Button
          type="button"
          className="btn-search"
          icon="./src/assets/images/iconButton/btn-search.png"
        />
        <select />
      </div>
    </div>
    <ListProducts />
  </DefaultLayout>
);

export default HomePage;
