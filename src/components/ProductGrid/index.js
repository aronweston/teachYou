import React, { useContext } from 'react';
import { GridContainer } from './styles';
import ProductCard from './ProductCard';
import ShopContext from '../../context/ShopContext';

const ProductGrid = () => {
  const { products, cart } = useContext(ShopContext);
  return (
    <>
      <p>Search results for "Vue"</p>
      <GridContainer>
        {products.map((product) => (
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
