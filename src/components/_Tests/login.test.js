import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Login from '../Login';

afterEach(cleanup);

const renderComponent = () => render(<Login />);

test('render the login component', () => {
  renderComponent();
  const loginElement = screen.getByTestId('login-wrapper');
  expect(loginElement).toBeInTheDocument();
  expect(loginElement).toHaveTextContent('Login');
});

describe('Input values', () => {
  it('updates on change', () => {
    renderComponent();

    const name = screen.getByPlaceholderText('Name');
    const email = screen.getByPlaceholderText('Email address');
    const password = screen.getByPlaceholderText('Password');
    fireEvent.change(name, { target: { value: 'aron' } });
    fireEvent.change(email, {
      target: { value: 'aron@aron.com' },
    });
    fireEvent.change(password, {
      target: { value: 'test' },
    });

    expect(name.value).toBe('aron');
    expect(email.value).toBe('aron@aron.com');
    expect(password.value).toBe('test');
  });

  it('submits and returns a loading screen', () => {
    renderComponent();
    const button = screen.getByTestId('login-button');
    fireEvent.click(button);
    const loader = screen.getByTestId('login-loader');
    expect(loader).not.toBe(null);
  });
});
