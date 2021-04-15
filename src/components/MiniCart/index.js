import React, { useContext } from 'react';
import {
  CloseBar,
  MiniCartContainer,
  RemoveButton,
  EmptyCart,
  CartContainer,
  CartItem,
} from './styles';
import ShopContext from '../../context/ShopContext';
import { Button } from '../Global';

const MiniCart = ({ visible, close }) => {
  const { cart, removeFromCart } = useContext(ShopContext);

  return (
    <MiniCartContainer data-testid='mini-cart' visible={visible ? true : null}>
      <CloseBar>
        <button onClick={close}>×</button>
      </CloseBar>
      <CartContainer>
        {cart?.length > 0 ? (
          cart?.map((item) => (
            <CartItem data-testid={`cart-item-${item.id}`} key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>{item.author}</p>
                <RemoveButton
                  onClick={() => {
                    window.confirm(
                      `Are you sure you want to remove ${item.name}?`
                    ) && removeFromCart(item.name);
                  }}>
                  Remove
                </RemoveButton>
              </div>
            </CartItem>
          ))
        ) : (
          <EmptyCart>
            <p>Empty Cart</p>
            <p>
              Your cart is empty. Browse our amazing courses on the course page!
            </p>
            <Button onClick={close}>Shop Now</Button>
          </EmptyCart>
        )}
      </CartContainer>
    </MiniCartContainer>
  );
};

export default MiniCart;
