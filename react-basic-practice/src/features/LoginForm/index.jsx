// Import react
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Import components
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Logo from '@/components/common/Logo';
import FormGroup from '@/components/FormGroup';

// Import constants
import ROUTE from '@/constants/route';

// Import context
import { useLoading } from '@/contexts/LoadingProvider';
import { useAuth } from '@/contexts/AuthProvider';

// Import service
import { getUserByEmail } from '@/services/Users';

// Import helpers
import validateInputForm from '@/helpers/validate';
import checkDataExist from '@/helpers/data';

// Import file css
import './index.css';

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
  const { setUserData } = useAuth();
  const navigate = useNavigate();

  const handleInputValue = (value) => {
    setInputValue({ ...inputValue, ...value });
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      // Check validation input
      const errorValid = validateInputForm(inputValue);

      setErrorMessage(errorValid.validateError);

      // Check data user
      if (!errorValid.haveErrorValid) {
        const dataUser = await getUserByEmail(inputValue.email);
        const haveUser = checkDataExist(dataUser, 'password', inputValue.password);

        if (haveUser) {
          const user = {
            userId: dataUser[0].id,
            username: dataUser[0].username,
            email: dataUser[0].email,
          };
          setUserData(user);
          localStorage.setItem('auth', user.userId);
          navigate(ROUTE.HOMEPAGE);
        } else {
          setErrorMessage({ form: 'Incorrect email or password.' });
        }
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
        <FormGroup className="form-login" handleSubmit={handleLogin}>
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

          {loading ? (
            <Button className="btn-login btn-loading" text="Loading..." disabled />
          ) : (
            <Button typeButton="submit" className="btn-login btn-primary" text="Log In" />
          )}
        </FormGroup>

        <span className="form-message">
          Already have an account?
          {' '}
          <Link to={ROUTE.SIGNUP} className="open-sign-up-page">
            Sign up
          </Link>
        </span>
      </main>
    </>
  );
};

export default LoginForm;
