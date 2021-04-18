import React, { useContext } from 'react';
import { CardWrapper, Button } from './styles';
import ShopContext from '../../../context/ShopContext';

const ProductCard = ({
  inCart,
  name,
  id,
  author,
  duration,
  publishDate,
  description,
  image,
}) => {
  const { addToCart } = useContext(ShopContext);

  const getDate = (date) => {
    const arr = date.split('/');
    const dateObj = new Date(arr[2], arr[1] - 1, arr[0]);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return dateObj.toLocaleDateString('en-GB', options);
  };
  const handleAddToCart = () => addToCart({ image, author, name, id });
  return (
    <CardWrapper data-testid={`product-card-${id}`}>
      <img data-testid='product-image' src={image} alt={description} />
      <div>
        <p>{name}</p>
        <p>{author}</p>
        <p>{getDate(publishDate)}</p>
        <p>Duration: {duration}</p>
        <p>{description}</p>
      </div>
      <Button
        data-testid='add-to-cart-button'
        remove={inCart}
        onClick={handleAddToCart}>
        {!inCart ? 'Add to Cart' : 'Remove from Cart'}
      </Button>
    </CardWrapper>
  );
};

export default ProductCard;
