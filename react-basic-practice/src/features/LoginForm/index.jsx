import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Logo from '../../components/common/Logo';
import FormGroup from '../../components/FormGroup';
import './index.css';

import { useLoading } from '../../contexts/loading';

const initialErrorMsgs = {
  email: '',
  userName: '',
  password: '',
  form: '',
};

const initialInput = {
  email: '',
  userName: '',
  password: '',
};

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState(initialErrorMsgs);
  const [inputValue, setInputValue] = useState(initialInput);
  const { loading, setLoading } = useLoading();

  const handleInputValue = (value) => {
    setInputValue({ ...inputValue, ...value });
  };

  const handleSignUp = async () => {
  };

  return (
    <>
      <header className="login header">
        <Logo />
      </header>
      <main className="login main">
        <h2 className="form-login-heading">Login</h2>
        <FormGroup
          className="form-login"
          handleSubmit={handleSignUp}
        >
          <Input
            label="Email:"
            inputType="text"
            name="email"
            cssClasses="input-form input-email"
            placeholder="minhng@gmail.com"
            handleInputChange={handleInputValue}
            errorMessage={errorMessage.email}
          />

          <Input
            label="Password:"
            inputType="password"
            name="password"
            cssClasses="input-form input-password"
            placeholder="Enter your password."
            errorMessage={errorMessage.password}
            handleInputChange={handleInputValue}
          />

          {errorMessage.form && <p className="form-login-error-message">{errorMessage.form}</p>}

          {
            loading
              ? (
                <Button
                  type="submit"
                  className="btn-login  btn-loading"
                  text="Loading..."
                  disabled
                />
              )
              : (
                <Button
                  type="submit"
                  className="btn-login btn-primary"
                  text="Submit"
                />
              )
            }
        </FormGroup>

        <span className="form-message">
          Already have an account?
          {' '}
          <Link to="/signup" className="open-sign-up-page">
            Signup
          </Link>
        </span>
      </main>
    </>
  );
};

export default LoginForm;
