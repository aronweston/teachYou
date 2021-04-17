import React from 'react';
import ProductGrid from './components/ProductGrid';
import Hero from './components/Hero';
import styled from 'styled-components';
const Container = styled.div`
  margin: 0 auto;
  padding: 15px;
`;

const App = () => {
  return (
    <>
      <Hero />
      <Container>
        <ProductGrid />
      </Container>
    </>
  );
};

export default App;
