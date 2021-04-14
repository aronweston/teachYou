import React, { useState } from 'react';
import { CardWrapper, Qty } from './styles';

const ProductCard = ({ name, author, duration, description, image }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <CardWrapper background={image}>
      <div></div>
      <div>
        <p>{name}</p>
        <p>{author}</p>
        <p>{duration}</p>
        <p>{description}</p>
      </div>
      <Qty
        // disabled={!available}
        type='number'
        min='1'
        step='1'
        value={quantity}
        // onChange={qtyChange}
      />
      <button
        onClick={() => {
          console.log('addded to cart');
        }}>
        Add to cart
      </button>
    </CardWrapper>
  );
};

export default ProductCard;
