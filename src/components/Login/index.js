import React, { useState } from 'react';
import { LoginWrapper, LoginContainer, ContactForm } from './styles';
import { Button } from '../Global';

const Login = ({ close, visible }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    console.log('submit');
  };

  return (
    <LoginWrapper visible={visible ? true : null}>
      <LoginContainer>
        {!loading ? (
          <ContactForm onSubmit={handleSubmit}>
            <h2>Login</h2>

            <label htmlFor='email'>
              <input
                type='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder='Enter your email address. ie. udemysucks@weteach.com.au'
              />
            </label>
            <label htmlFor='email'>
              <input
                type='password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder='Enter your password. eg. Skillshare is subpar.'
              />
            </label>
            <Button secondary>Send</Button>
          </ContactForm>
        ) : (
          <div>Loading...</div>
        )}
      </LoginContainer>
      <button onClick={close}>Exit</button>
    </LoginWrapper>
  );
};

export default Login;
