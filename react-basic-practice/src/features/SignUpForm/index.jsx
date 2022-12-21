import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import REGEXP from '../../constants/regexp';

import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Logo from '../../components/common/Logo';
import FormGroup from '../../components/FormGroup';
import './index.css';

const initialErrorMsgs = {
  inputEmail: '',
  inputUserName: '',
  inputPassword: '',
};

const initialInput = {
  inputEmail: '',
  inputUserName: '',
  inputPassword: '',
};


const SignUpForm = () => {
  const [isSignUpLoading, setIsSignUpLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(initialErrorMsgs);
  const [inputValue, setInputValue] = useState(initialInput);

  const handleInputValue = (value) => {
    setInputValue({ ...inputValue, ...value });
  };

  const validation = () => {
    for (const key in inputValue) {
      if (inputValue[key] === '') {
        setErrorMessage((preMsg) => ({
          ...preMsg,
          [key]: 'This input is required.',
        }));
      } else {
        setErrorMessage((preMsg) => ({
          ...preMsg,
          [key]: '',
        }));
      }
    }
  };

  const validateInputs = () => {
    if (inputValue.inputPassword !== '') {
      REGEXP.REGEXP_PASSWORD.test(inputValue.inputPassword)
        ? setErrorMessage((preMsg) => ({ ...preMsg, inputPassword: '' }))
        : setErrorMessage((preMsg) => ({ ...preMsg, inputPassword: 'Invalid password' }));
    }

    if (inputValue.inputEmail !== '') {
      REGEXP.REGEXP_MAIL.test(inputValue.inputEmail)
        ? setErrorMessage((preMsg) => ({ ...preMsg, inputEmail: '' }))
        : setErrorMessage((preMsg) => ({ ...preMsg, inputEmail: 'Invalid email' }));
    }

    if (inputValue.inputUserName !== '') {
      REGEXP.REGEXP_USER_NAME.test(inputValue.inputUserName)
        ? setErrorMessage((preMsg) => ({ ...preMsg, inputUserName: '' }))
        : setErrorMessage((preMsg) => ({ ...preMsg, inputUserName: 'Invalid user name' }));
    }
  };

  const handleSignUp = (e) => {
    try {
      e.preventDefault();

      setIsSignUpLoading(true);

      validation();
      validateInputs();

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
            name="inputEmail"
            cssClasses="input-form input-email"
            placeholder="minhng@gmail.com"
            handleInputChange={handleInputValue}
            errorMessage={errorMessage.inputEmail}
          />

          <Input
            label="Username:"
            inputType="text"
            name="inputUserName"
            cssClasses="input-form input-username"
            placeholder="Minh Nguyen"
            handleInputChange={handleInputValue}
            errorMessage={errorMessage.inputUserName}
          />

          <Input
            label="Password:"
            inputType="password"
            name="inputPassword"
            cssClasses="input-form input-password"
            placeholder="Enter your password."
            errorMessage={errorMessage.inputPassword}
            handleInputChange={handleInputValue}
          />

          {/* {errorMessage && <span className="form-sign-up-error-message">{errorMessage}</span>} */}

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
          <Link to="/login">
            Login
          </Link>
        </span>
      </main>
    </>
  );
};

export default SignUpForm;
