import React, { useState, useEffect, useContext } from 'react';
import { LoginWrapper, LoginContainer, ContactForm, Success } from './styles';
import { Button } from '../Global';
import ShopContext from '../../context/ShopContext';

const Login = ({ close, visible }) => {
  const { loginUser, user } = useContext(ShopContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    visible = true;
    setSuccess(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      setSuccess(true);
      loginUser(name, email, password);
      setTimeout(() => {
        setLoading(false);
        close();
      }, 2000);
    }, 4000);
  };

  return (
    <LoginWrapper visible={visible ? true : null}>
      <LoginContainer>
        {!loading ? (
          <ContactForm onSubmit={handleSubmit}>
            <p>Login</p>
            <label hidden htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder='Name'
            />

            <label hidden htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder='Email address.'
            />

            <label hidden htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder='Password'
            />
            <Button secondary>Login</Button>
          </ContactForm>
        ) : (
          <>
            {success ? (
              <Success>hello {user?.name}</Success>
            ) : (
              <div>Loading...</div>
            )}
          </>
        )}
      </LoginContainer>
      <button onClick={close}>Exit</button>
    </LoginWrapper>
  );
};

export default Login;
