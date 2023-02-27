import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import ROUTE from './constants/route';

const Routing = () => (
  <Routes>
    <Route
      path={ROUTE.LOGIN}
      element={<LoginPage />}
    />
    <Route
      path={ROUTE.SIGNUP}
      element={<SignUpPage />}
    />
    <Route
      path={ROUTE.HOMEPAGE}
      element={<HomePage />}
    />
    <Route path={ROUTE.PRODUCT} element={<ProductDetail />} />
  </Routes>
);

export default Routing;
