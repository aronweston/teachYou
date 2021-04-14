import React from 'react';
import ProductGrid from '../ProductGrid';
import Hero from '../Hero';
import { Container } from './styles';

const Home = () => {
  return (
    <>
      <Hero />
      <Container>
        <ProductGrid />
      </Container>
    </>
  );
};

export default Home;
