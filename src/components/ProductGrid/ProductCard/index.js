import React, { useState, useContext } from 'react';
import { CardWrapper, Button } from './styles';
import ShopContext from '../../../context/ShopContext';

const ProductCard = ({ name, author, duration, description, image }) => {
  const { addToCart } = useContext(ShopContext);

  // const getTime = (duration) => {
  //   const date = duration.split(':');
  //   console.log(date);
  // };

  return (
    <CardWrapper>
      <img src={image} alt={name + description} />
      <div>
        <p>{name}</p>
        <p>{author}</p>
        <p>Duration: {duration}</p>
        <p>{description}</p>
      </div>
      <Button
        onClick={() => {
          addToCart({ image, author, name });
        }}>
        Add to cart
      </Button>
    </CardWrapper>
  );
};

export default ProductCard;
