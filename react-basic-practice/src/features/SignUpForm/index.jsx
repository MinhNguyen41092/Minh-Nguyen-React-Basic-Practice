import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Logo from '../../components/common/Logo';
import FormGroup from '../../components/FormGroup';
import './index.css';

import { createUser, getAllUsers } from '../../services/Users';
import { createNewCart } from '../../services/Cart';
import validateInput from '../../helpers/validate';
import { useLoading } from '../../contexts/LoadingProvider';

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
  const [errorMessage, setErrorMessage] = useState(initialErrorMsgs);
  const [inputValue, setInputValue] = useState(initialInput);
  const navigate = useNavigate();
  const { loading, setLoading } = useLoading();

  const handleInputValue = (value) => {
    setInputValue({ ...inputValue, ...value });
  };

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      // Check validation input
      const errorValid = validateInput(inputValue);

      if (!errorValid.error) {
        // Check email already exists.
        const dataUser = await getAllUsers();
        const haveUser = dataUser.some((user) => user.email === inputValue.email);

        if (haveUser) {
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
            email: inputValue.email || '',
            password: inputValue.password || '',
          };

          const newCart = {
            id: newUser.id,
            listProducts: [],
          };

          Promise.all([
            await createUser(newUser),
            await createNewCart(newCart),
          ]);

          navigate('/login');
        }
      } else {
        setErrorMessage(errorValid.validateError);
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
            loading
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
