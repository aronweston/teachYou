import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import ProductCard from '../ProductGrid/ProductCard';

afterEach(cleanup);

const product = [
  {
    id: 1,
    name: 'React - basics',
    description: 'This course is going to take you through basics of React.',
    author: 'James White',
    publishDate: '12/03/2019',
    duration: '00:03:56',
    image: 'https://cdn.auth0.com/blog/react-js/react.png',
  },
];

const renderComponent = (product) => {
  return render(
    <ProductCard
      inCart={true}
      name={product.name}
      id={product.id}
      image={product.image}
      author={product.author}
      duration={product.duration}
      description={product.description}
    />
  );
};

test('Product card renders correctly and outputs the correct products from a product array', () => {
  // renderComponent(product);
  // const productCard = screen.getByTestId('product-card-1');
  // expect(productCard).toBeInTheDocument();
});

describe('add to cart button', () => {
  it('does not trigger add to cart function', () => {
    // const handleAddToCart = jest.fn();
    // renderComponent();
    // fireEvent.click(screen.getByTestId('add-to-cart-button'));
    // expect(handleAddToCart).not.toHaveBeenCalled();
  });
});
