import React, { useContext } from 'react';
import {
  CartHeader,
  CloseBar,
  MiniCartContainer,
  ButtonBlock,
  CartContainer,
  CartItem,
} from './styles';
// import CartContext from 'context/CartContext';

const MiniCart = ({ visible, close }) => {
  // const { checkout } = useContext(CartContext);

  // visible = true;

  const data = [
    {
      name: 'CSS Animations',
      description: 'Learn how to animate anything in CSS',
      author: 'Alan Smith',
      publishDate: '04/12/2018',
      duration: '00:02:11',
      image:
        'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png',
    },
  ];

  return (
    <MiniCartContainer visible={visible ? true : null}>
      <CartHeader>
        <div />
        <CloseBar>
          <button onClick={close}>×</button>
        </CloseBar>
      </CartHeader>
      <CartContainer>
        {data?.map((item) => (
          <CartItem key={item.name}>
            <img src={item.image} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>{item.author}</p>
              <p>Qty: {item.quantity}</p>
            </div>
          </CartItem>
        ))}
      </CartContainer>
      <ButtonBlock>
        <div>
          <strong>Subtotal</strong>
        </div>
        <button
          onClick={() => {
            console.log('click');
          }}>
          Checkout
        </button>
      </ButtonBlock>
    </MiniCartContainer>
  );
};

export default MiniCart;
