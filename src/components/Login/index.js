import React, { useState, useContext } from 'react';
import {
  LoginWrapper,
  LoginContainer,
  ContactForm,
  Success,
  SuccessIcon,
} from './styles';
import { Button } from '../Global';
import ShopContext from '../../context/ShopContext';
import loader from '../../assets/gif/spinner.gif';

const Login = ({ close, visible }) => {
  const { loginUser, user } = useContext(ShopContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      setSuccess(true);
      loginUser(name, email, password);
      setTimeout(() => {
        setLoading(false);
        close();
      }, 3500);
    }, 4000);
  };

  return (
    <LoginWrapper data-testid='login-wrapper' visible={visible ? true : null}>
      <LoginContainer>
        {!loading ? (
          <ContactForm onSubmit={handleSubmit}>
            <p>Login</p>
            <label hidden htmlFor='name'>
              name
            </label>
            <input
              id='name'
              type='text'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder='Name'
            />

            <label hidden htmlFor='email'>
              email
            </label>
            <input
              id='email'
              type='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder='Email address'
            />

            <label hidden htmlFor='password'>
              password
            </label>
            <input
              type='password'
              id='password'
              name='current-password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder='Password'
            />
            <Button data-testid='login-button' secondary>
              Login
            </Button>
          </ContactForm>
        ) : (
          <Success>
            {success ? (
              <>
                <SuccessIcon data-testid='success' />
                <span>Success!</span>
                <p>Hi {user?.name}, you can now buy courses!</p>
                <Button onClick={close}>Start learning!</Button>
              </>
            ) : (
              <img
                data-testid='login-loader'
                src={loader}
                alt='Loading animation. Please wait while we check your login.'
              />
            )}
          </Success>
        )}
      </LoginContainer>
      <button onClick={close}>Close</button>
    </LoginWrapper>
  );
};

export default Login;
