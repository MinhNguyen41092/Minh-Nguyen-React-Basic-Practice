import React from 'react';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

import './index.css';

const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <div className="container">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
