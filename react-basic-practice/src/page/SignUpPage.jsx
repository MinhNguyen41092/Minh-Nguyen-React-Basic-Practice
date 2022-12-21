import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SignUpForm from '../features/SignUpForm';

const SignUpPage = () => (
  <BrowserRouter>
    <SignUpForm />
  </BrowserRouter>
);

export default SignUpPage;
