import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import ListProducts from '@/components/ListProducts';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import SelectGroup from '@/components/SelectGroup';
import './index.css';

const options = [
  'Name',
  'Price',
];

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
      </div>
      <SelectGroup options={options} />
    </div>
    <ListProducts />
  </DefaultLayout>
);

export default HomePage;
