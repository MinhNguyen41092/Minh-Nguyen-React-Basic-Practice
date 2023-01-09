import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import ListProducts from '@/components/ListProducts';
import Sidebar from '@/components/SideBar';
import './index.css';

const HomePage = () => (
  <DefaultLayout>
    <Sidebar />
    <ListProducts />
  </DefaultLayout>
);

export default HomePage;
