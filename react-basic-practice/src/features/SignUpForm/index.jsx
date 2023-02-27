// Import react
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

// Import components
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Logo from '@/components/common/Logo';
import FormGroup from '@/components/FormGroup';

// Import service
import { createUser, getUserByEmail } from '@/services/Users';
import { createNewCart } from '@/services/Cart';

// Import helpers
import validateInputForm from '@/helpers/validate';

// Import context
import { useLoading } from '@/contexts/LoadingProvider';
import { useAuth } from '@/contexts/AuthProvider';

// Import constants
import ROUTE from '@/constants/route';

// Import file css
import './index.css';

const initialErrorMsgs = {
  email: '',
  username: '',
  password: '',
  form: '',
};

const initialInput = {
  email: '',
  username: '',
  password: '',
};

const SignUpForm = () => {
  const [errorMessage, setErrorMessage] = useState(initialErrorMsgs);
  const [inputValue, setInputValue] = useState(initialInput);
  const navigate = useNavigate();
  const { loading, setLoading } = useLoading();
  const { setUserData } = useAuth();

  const handleInputValue = (value) => {
    setInputValue({ ...inputValue, ...value });
  };

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      // Check validation input
      const errorValid = validateInputForm(inputValue);

      setErrorMessage(errorValid.validateError);

      if (!errorValid.haveErrorValid) {
        // Check email already exists
        const dataUser = await getUserByEmail(inputValue.email);

        if (dataUser.length) {
          // Show error if email already exists
          setErrorMessage((preMsg) => ({
            ...preMsg,
            form: 'Email is already in use. Please try another one.',
          }));
        } else {
          // Send data to API to create new users
          const newUser = {
            id: uuidv4(),
            username: inputValue.username || '',
            email: inputValue.email || '',
            password: inputValue.password || '',
          };

          const newCart = {
            id: newUser.id,
            products: [],
          };

          await createUser(newUser);
          await createNewCart(newCart);

          const user = {
            userId: newUser.id,
            username: newUser.username,
            email: newUser.email,
          };
          setUserData(user);
          localStorage.setItem('auth', user.userId);
          navigate(ROUTE.HOMEPAGE);
        }
      }
    } catch (error) {
      alert(`Registration Fail. Please try again ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="sign-up header">
        <Logo />
      </header>
      <main className="sign-up main">
        <h2 className="form-sign-up-heading">Register</h2>
        <FormGroup className="form-sign-up" handleSubmit={handleSignUp}>
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
            label="Username:"
            inputType="text"
            name="username"
            cssClasses="input-form input-username"
            placeholder="Minh Nguyen"
            handleInputChange={handleInputValue}
            errorMessage={errorMessage.username}
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
            <Button className="btn-sign-up btn-loading" text="Loading..." disabled />
          ) : (
            <Button typeButton="submit" className="btn-sign-up btn-primary" text="Sign Up" />
          )}
        </FormGroup>

        <span className="form-message">
          Already have an account?
          {' '}
          <Link to={ROUTE.LOGIN} className="open-login-page">
            Log in
          </Link>
        </span>
      </main>
    </>
  );
};

export default SignUpForm;
