import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

const Routing = () => (
  <Routes>
    <Route
      path="/"
      element={<SignUpPage />}
    />
    <Route
      path="/login"
      element={<LoginPage />}
    />
  </Routes>
);

export default Routing;
