import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import uuid from 'react-uuid';

// import { createUser, getUserByMail } from '../../services/apiUsers';
// import { createUserCart } from '../../services/apiCart';

import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Logo from '../../components/common/Logo';
import FormGroup from '../../components/FormGroup';
import './index.css';

const SignUpPage = () => {
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
    // switch (inputValue) {
    //   case inputValue.inputEmail = '':
    //     setErrorMessage({ ...errorMessage, errMsgEmail: 'This input is required.' });
    //     console.log('email');
    //     break;
    //   case inputValue.inputUserName = '':
    //     setErrorMessage({ ...errorMessage, errMsgUserName: 'This input is required.' });
    //     console.log('name');
    //     break;
    //   default:
    //     setErrorMessage({ ...errorMessage, errMsgPassword: 'This input is required.' });
    //     console.log('pass');
    //     break;
    // }
    // eslint-disable-next-line no-restricted-syntax
    for (const key in inputValue) {
      if (inputValue[key] === '') {
        // setErrorMessage({ ...errorMessage, [key]: 'This input is required.' });
        setErrorMessage((preState) => { ...preState, [key] : 'This input is required.'; });
      }
    }
  };

  const handleSignUp = (e) => {
    try {
      e.preventDefault();

      setIsSignUpLoading(true);

      checkEmpty();

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
            // messageErr={errorMessage.errMsgEmail}
          />

          <Input
            label="Username:"
            inputType="text"
            name="inputUserName"
            cssClasses="input-form input-username"
            placeholder="Minh Nguyen"
            handleInput={handleInputValue}
            // messageErr={errorMessage.errMsgUserName}
            // pattern="^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$"
          />

          <Input
            label="Password:"
            inputType="password"
            name="inputPassword"
            cssClasses="input-form input-password"
            placeholder="Password at least 6 characters"
            // messageErr={errorMessage.errMsgPassword}
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

export default SignUpPage;
