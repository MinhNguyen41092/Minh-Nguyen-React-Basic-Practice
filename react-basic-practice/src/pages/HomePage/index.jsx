import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import ListProducts from '@/components/ListProducts';
import './index.css';

const HomePage = () => (
  <DefaultLayout>
    <ListProducts />
  </DefaultLayout>
);

export default HomePage;
