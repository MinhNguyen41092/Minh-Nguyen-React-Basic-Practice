import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { REGEXP } from '../../constants/regexp';

import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Logo from '../../components/common/Logo';
import FormGroup from '../../components/FormGroup';
import './index.css';

const SignUpForm = () => {
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
  const [isSignUpLoading, setIsSignUpLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(initialErrorMsgs);
  const [inputValue, setInputValue] = useState(initialInput);

  const handleInputValue = (value) => {
    setInputValue({ ...inputValue, ...value });
  };

  const checkEmpty = () => {
    for (const key in inputValue) {
      if (inputValue[key] === '') {
        setErrorMessage((preMsg) => ({
          ...preMsg, [key]: 'This input is required.',
        }));
      } else {
        setErrorMessage((preMsg) => ({
          ...preMsg, [key]: '',
        }));
      }
    }
  };

  const checkValidate = () => {
    if (inputValue.inputEmail !== '') {
      if (inputValue.inputEmail !== REGEXP.REGEXP_MAIL) {
        setErrorMessage((preMsg) => ({
          ...preMsg, inputEmail: 'The email entered is not in the correct format, please try again',
        }));
      }
      if (inputValue.inputPassword !== REGEXP.REGEXP_PASSWORD) {
        setErrorMessage((preMsg) => ({
          ...preMsg, inputPassword: 'The password entered is not in the correct format, please try again',
        }));
      }
    }
  };

  const handleSignUp = (e) => {
    try {
      e.preventDefault();

      setIsSignUpLoading(true);

      checkEmpty();
      checkValidate();

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
            handleInput={handleInputValue}
            messageErr={errorMessage.inputEmail}
          />

          <Input
            label="Username:"
            inputType="text"
            name="inputUserName"
            cssClasses="input-form input-username"
            placeholder="Minh Nguyen"
            handleInput={handleInputValue}
            messageErr={errorMessage.inputUserName}
            // pattern="^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$"
          />

          <Input
            label="Password:"
            inputType="password"
            name="inputPassword"
            cssClasses="input-form input-password"
            placeholder="Password at least 6 characters"
            messageErr={errorMessage.inputPassword}
            handleInput={handleInputValue}
            // pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$"
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
          {/* <Link to="/login">
              Login
            </Link> */}
        </span>
      </main>
    </>
  );
};

export default SignUpForm;
