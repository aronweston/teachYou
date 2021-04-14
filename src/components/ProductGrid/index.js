import React, { useContext } from 'react';
import { GridContainer } from './styles';
import ProductCard from './ProductCard';
import ShopContext from '../../context/ShopContext';

const ProductGrid = () => {
  const { products } = useContext(ShopContext);
  return (
    <GridContainer>
      {products[0].lessons.map((product) => (
        <ProductCard
          key={product.name}
          name={product.name}
          image={product.image}
          author={product.author}
          duration={product.duration}
          description={product.description}
        />
      ))}
    </GridContainer>
  );
};

export default ProductGrid;
