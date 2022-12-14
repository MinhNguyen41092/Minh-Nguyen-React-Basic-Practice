import React, { useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
import Logo from '../../components/common/Logo';
import Input from '../../components/common/input';
import Button from '../../components/common/button';
import './index.css';

const LoginPage = () => {
  const inputUsername = useRef(null);
  const inputPassword = useRef(null);
  const [error, setError] = useState(false);

  const handleLogin = () => {};

  return (
    <>
      <header className="login header">
        <Logo />
      </header>
      <main className="login main">
        <form className="form form-login" onSubmit={(e) => handleLogin(e)}>
          <h2 className="form-login-heading">Login Form</h2>
          <Input
            label="Username:"
            inputType="text"
            inputId="username"
            cssClasses="username"
            placeholder="Username"
            inputRef={inputUsername}
          />
          {
            error ? <span className="form-error-message"> Do not leave this field empty</span> : null
          }
          <Input
            label="Password:"
            inputType="password"
            inputId="password"
            cssClasses="username"
            placeholder="Password"
            refer={inputPassword}
          />
          {
            error ? <span className="form-error-message"> Do not leave this field empty</span> : null
          }
          <Button
            size="large"
            type="submit"
            className="btn-login"
            text="Login"
          />
          <a href="/">Sign up</a>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
