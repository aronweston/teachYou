import React, { useState } from 'react';
import defaultState from './DefaultState';
import ShopContext from './ShopContext';

export default function ShopContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [userVisible, setUserVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);

  const showUser = () => {
    !userVisible ? setUserVisible(true) : setUserVisible(false);
  };

  const showCart = () => {
    !cartVisible ? setCartVisible(true) : setCartVisible(false);
  };

  const loginUser = (name, email, password) => {
    setUser({
      name,
      email,
      password,
    });
  };

  const addToCart = (productObj) => {
    if (Object.keys(user).length > 0) {
      const found = cart.find((product) => product.name === productObj.name);
      if (found) {
        removeFromCart(found.name);
      } else {
        const newCartItems = [...cart, productObj];
        setCart(newCartItems);
        setCartVisible(true);
      }
    } else {
      setUserVisible(true);
    }
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((product) => product.name !== item);
    setCart(newCart);
  };

  return (
    <ShopContext.Provider
      value={{
        user,
        cart,
        products: defaultState.products,
        addToCart,
        removeFromCart,
        loginUser,
        userVisible,
        showUser,
        cartVisible,
        showCart,
      }}>
      {children}
    </ShopContext.Provider>
  );
}
