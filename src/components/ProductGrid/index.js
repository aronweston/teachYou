import React, { useEffect, useContext } from 'react';
import { GridContainer, ResultsTitle, NoResults } from './styles';
import ProductCard from './ProductCard';
import ShopContext from '../../context/ShopContext';

const ProductGrid = () => {
  const { results, query, cart } = useContext(ShopContext);
  const ql = query.length;
  const rl = results.length;
  return (
    <>
      {rl > 0 && ql > 0 ? (
        <ResultsTitle>
          {rl} {rl > 1 ? 'results' : 'result'} found for <span>"{query}"</span>
        </ResultsTitle>
      ) : (
        ''
      )}

      {results.length === 0 && (
        <NoResults>
          No results found for <span>"{query}"</span>
        </NoResults>
      )}

      <GridContainer>
        {results.map((product) => (
          <ProductCard
            inCart={
              cart.length > 0 &&
              cart.find((cartItem) => cartItem.name === product.name)
            }
            id={product.id}
            key={product.id}
            name={product.name}
            image={product.image}
            author={product.author}
            duration={product.duration}
            description={product.description}
          />
        ))}
      </GridContainer>
    </>
  );
};

export default ProductGrid;
