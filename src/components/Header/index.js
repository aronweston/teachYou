import React, { useContext, useState } from 'react';
import { HeaderWrapper, Logo, CartIcon, UserIcon } from './styles';
import ShopContext from '../../context/ShopContext';
import MiniCart from '../MiniCart';
import Login from '../Login';

const Header = () => {
  const { products } = useContext(ShopContext);

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
        <span>
          <Logo />
          teachYou
        </span>
        <div>
          <button>
            <UserIcon onClick={showUser} />
          </button>
          <button>
            <CartIcon onClick={showCart} />
          </button>
        </div>
      </HeaderWrapper>
      <MiniCart visible={cartVisible} close={() => setCartVisible(false)} />
      <Login visible={userVisible} close={() => setUserVisible(false)} />
    </>
  );
};

export default Header;
