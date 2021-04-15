import React, { useContext } from 'react';
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
  const {
    user,
    cart,
    showUser,
    userVisible,
    showCart,
    cartVisible,
  } = useContext(ShopContext);

  return (
    <>
      <HeaderWrapper>
        <div>
          <Logo />
          <span>teachYou </span>
        </div>

        <CartContainer>
          <button>
            <UserIcon
              login={user?.name?.length > 1 ? true : undefined}
              onClick={showUser}
            />
          </button>

          <button>
            <CartIcon onClick={showCart} />
          </button>
          <span>{cart?.length}</span>
        </CartContainer>
      </HeaderWrapper>
      <MiniCart
        visible={cartVisible}
        close={() => {
          showCart();
        }}
      />
      <Login
        visible={userVisible}
        close={() => {
          showUser();
        }}
      />
    </>
  );
};

export default Header;
