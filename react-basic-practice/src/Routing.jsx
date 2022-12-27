import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

const Routing = () => (
  <Routes>
    <Route
      path="/"
      element={<LoginPage />}
    />
    <Route
      path="/signup"
      element={<SignUpPage />}
    />
  </Routes>
);

export default Routing;
