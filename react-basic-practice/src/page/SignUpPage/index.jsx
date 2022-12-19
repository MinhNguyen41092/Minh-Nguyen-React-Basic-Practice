import React, { useRef, useState } from 'react';
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
  const [isSignUpLoading, setIsSignUpLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState({});
  const inputUsername = useRef(null);
  const inputPassword = useRef(null);
  const inputEmail = useRef(null);

  const handleSignUp = () => {

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
          handleSubmit={handleSignUp  }
        >
          <Input
            label="Email:"
            inputType="text"
            inputId="email"
            cssClasses="input-form input-email"
            placeholder="minhng@gmail.com"
            refer={inputEmail}
          />

          <Input
            label="Username:"
            inputType="text"
            inputId="username"
            cssClasses="input-form input-username"
            placeholder="Minh Nguyen"
            message="Invalid username"
            refer={inputUsername}
            // pattern="^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$"
          />

          <Input
            label="Password:"
            inputType="password"
            inputId="password"
            cssClasses="input-form input-password"
            placeholder="Password at least 6 characters"
            message="Invalid password"
            refer={inputPassword}
            // pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$"
          />
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
