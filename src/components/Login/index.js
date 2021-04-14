import React, { useState, useContext } from 'react';
import { LoginWrapper, LoginContainer, ContactForm } from './styles';
import { Button } from '../Global';
import ShopContext from '../../context/ShopContext';

const Login = ({ close, visible }) => {
  const { loginUser } = useContext(ShopContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //set loading once submitted
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 4000);

    setSuccess(true);
    loginUser(email, password);
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
          <>{success ? <div>success</div> : <div>Loading...</div>}</>
        )}
      </LoginContainer>
      <button onClick={close}>Exit</button>
    </LoginWrapper>
  );
};

export default Login;
