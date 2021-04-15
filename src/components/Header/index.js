import React, { useContext, useState } from 'react';
import {
  HeaderWrapper,
  Logo,
  CartIcon,
  UserIcon,
  CartContainer,
} from './styles';
import ShopContext from '../../context/ShopContext';
import MiniCart from '../MiniCart';
import Login from '../Login';

const Header = () => {
  const { products, user, cart } = useContext(ShopContext);

  const [cartVisible, setCartVisible] = useState(false);
  const [userVisible, setUserVisible] = useState(false);

  const showCart = () => {
    !cartVisible ? setCartVisible(true) : setCartVisible(false);
  };

  const showUser = () => {
    !userVisible ? setUserVisible(true) : setUserVisible(false);
  };

  return (
    <>
      <HeaderWrapper>
        <div>
          <Logo />
          <span>teachYou </span>
        </div>

        <CartContainer>
          <button>
            <UserIcon loggedIn={user ? true : null} onClick={showUser} />
          </button>

          <button>
            <CartIcon onClick={showCart} />
          </button>
          <span>{cart?.length}</span>
        </CartContainer>
      </HeaderWrapper>
      <MiniCart visible={cartVisible} close={() => setCartVisible(false)} />
      <Login visible={userVisible} close={() => setUserVisible(false)} />
    </>
  );
};

export default Header;
