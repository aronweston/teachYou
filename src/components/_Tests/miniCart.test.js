import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import MiniCart from '../MiniCart';

const cart = [
  {
    id: 1,
    image: 'https://cdn.auth0.com/blog/react-js/react.png',
    author: 'James White',
    name: 'React - basics',
  },
  {
    id: 2,
    image: 'https://vuejs.org/images/logo.png',
    author: 'Michael Brown',
    name: 'Vue - learn vue in an hour',
  },
];

afterEach(cleanup);

const renderComponent = () => render(<MiniCart />);

test('Mini cart renders', () => {
  renderComponent();
  const miniCart = screen.getByTestId('mini-cart');

  expect(miniCart).toBeInTheDocument();
});

describe('Mini cart displays two renders', () => {
  it('shows a full cart', () => {
    render(<MiniCart />);
  });

  it('shows an empty cart', () => {
    renderComponent();
    const emptyCart = screen.getByText(
      'Your cart is empty. Browse our amazing courses on the course page!'
    );
    expect(emptyCart).not.toBeNull();
  });
});
