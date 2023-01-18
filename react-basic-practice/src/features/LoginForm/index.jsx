import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Logo from '../../components/common/Logo';
import FormGroup from '../../components/FormGroup';
import './index.css';
import ROUTE from '@/constants/route';

import { useLoading } from '../../contexts/LoadingProvider';
import { getUserByEmail } from '../../services/Users';
import validateInput from '../../helpers/validate';
import hasData from '../../helpers/data';
import { useAuth } from '@/contexts/AuthProvider';

const initialErrorMsgs = {
  email: '',
  password: '',
  form: '',
};

const initialInput = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState(initialErrorMsgs);
  const [inputValue, setInputValue] = useState(initialInput);
  const { loading, setLoading } = useLoading();
  const { setUserId } = useAuth();
  const navigate = useNavigate();

  const handleInputValue = (value) => {
    setInputValue({ ...inputValue, ...value });
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      // Check validation input
      const errorValid = validateInput(inputValue);

      // Check data user
      if (!errorValid.error) {
        const dataUser = await getUserByEmail(inputValue.email);
        const haveUser = hasData(dataUser, 'password', inputValue.password);

        if (haveUser) {
          setUserId(dataUser[0].id);
          localStorage.setItem('auth', dataUser[0].id);
          navigate(ROUTE.HOMEPAGE);
        } else {
          setErrorMessage({ form: 'Incorrect email or password.' });
        }
      } else {
        setErrorMessage(errorValid.validateError);
      }
    } catch (error) {
      alert(`Login Fail. Please try again ${error}`);
    } finally {
      setLoading(false);
    }
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
          handleSubmit={handleLogin}
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

          {errorMessage.form && <p className="error-message">{errorMessage.form}</p>}

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
          <Link to={ROUTE.SIGNUP} className="open-sign-up-page">
            Signup
          </Link>
        </span>
      </main>
    </>
  );
};

export default LoginForm;
