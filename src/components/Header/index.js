import React, { useContext } from 'react';
import {
  HeaderWrapper,
  Logo,
  CartIcon,
  UserIcon,
  LogoutIcon,
  CartContainer,
} from './styles';
import ShopContext from '../../context/ShopContext';
import MiniCart from '../MiniCart';
import Login from '../Login';

const Header = () => {
  const {
    user,
    cart,
    logoutUser,
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
          {Object.keys(user).length > 1 ? (
            <>
              <p>{user.name.split(' ')[0]}</p>
              <button>
                <LogoutIcon onClick={logoutUser} />
              </button>
            </>
          ) : (
            <button>
              <UserIcon onClick={showUser} />
            </button>
          )}

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
