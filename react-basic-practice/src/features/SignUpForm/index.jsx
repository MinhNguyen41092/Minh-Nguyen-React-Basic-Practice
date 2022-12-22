import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import REGEXP from '../../constants/regexp';

import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Logo from '../../components/common/Logo';
import FormGroup from '../../components/FormGroup';
import './index.css';

import { createUser, getAllUsers } from '../../services/Users';
import Validate from '../../helpers/validate';

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

const SignUpForm = () => {
  const [isSignUpLoading, setIsSignUpLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(initialErrorMsgs);
  const [inputValue, setInputValue] = useState(initialInput);
  const navigate = useNavigate();

  const handleInputValue = (value) => {
    setInputValue({ ...inputValue, ...value });
  };

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();

      setIsSignUpLoading(true);

      // Check validation input
      const validateInput = Validate(inputValue);
      setErrorMessage(validateInput.validateError);

      const dataUser = await getAllUsers();
      // Check email already exists.
      const validate = dataUser.some((user) => user.email === inputValue.email);
      console.log(validateInput.error);

      if (!validateInput.error) {
        if (validate) {
          // Show error if email already exists.
          setErrorMessage((preMsg) => ({
            ...preMsg,
            form: 'Email is already in use. Please try another one.',
          }));
        } else {
          // Send data to API to create new users.
          const newUser = {
            id: uuidv4(),
            username: inputValue.userName || '',
            password: inputValue.password || '',
          };
  
          await createUser(newUser);
          navigate('/login');
        }
      }

      setIsSignUpLoading(false);
    } catch (error) {
      alert(`Registration Fail. Please try again ${error}`);
      setIsSignUpLoading(false);
    }
  };

  return (
    <>
      <header className="sign-up header">
        <Logo />
      </header>
      <main className="sign-up main">
        <h2 className="form-sign-up-heading">Register</h2>
        <FormGroup
          className="form-sign-up"
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
            label="Username:"
            inputType="text"
            name="userName"
            cssClasses="input-form input-username"
            placeholder="Minh Nguyen"
            handleInputChange={handleInputValue}
            errorMessage={errorMessage.userName}
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

          {errorMessage.form && <p className="form-sign-up-error-message">{errorMessage.form}</p>}

          {
            isSignUpLoading
              ? (
                <Button
                  type="submit"
                  className="btn-sign-up  btn-loading"
                  text="Loading..."
                  disabled
                />
              )
              : (
                <Button
                  type="submit"
                  className="btn-sign-up btn-primary"
                  text="Submit"
                />
              )
            }
        </FormGroup>

        <span className="form-message">
          Already have an account?
          {' '}
          <Link to="/login" className="open-login-page">
            Login
          </Link>
        </span>
      </main>
    </>
  );
};

export default SignUpForm;
