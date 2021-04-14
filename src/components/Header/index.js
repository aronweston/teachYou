import React, { useContext, useState } from 'react';
import { HeaderWrapper, Logo, CartIcon } from './styles';
import ShopContext from '../../context/ShopContext';
import MiniCart from '../MiniCart';

const Header = () => {
  const { products } = useContext(ShopContext);
  console.log(products);

  const [cartVisible, setCartVisible] = useState(false);
  const showCart = () => {
    !cartVisible ? setCartVisible(true) : setCartVisible(false);
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
            <CartIcon onClick={showCart} />
          </button>
          <button>
            <CartIcon onClick={showCart} />
          </button>
        </div>
      </HeaderWrapper>

      <MiniCart
        visible={cartVisible}
        crossClick={() => setCartVisible(false)}
      />
    </>
  );
};

export default Header;
