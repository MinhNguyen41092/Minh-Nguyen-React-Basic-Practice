import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from './page/SignUpPage';

const Routing = () => (
  <Routes>
    <Route
      path="/"
      element={<SignUpPage />}
    />
  </Routes>
);

export default Routing;
