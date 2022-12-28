import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

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
    <Route
      path="/homepage"
      element={<HomePage />}
    />
  </Routes>
);

export default Routing;
