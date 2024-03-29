import React, { useState, useEffect } from 'react';
import defaultState from './DefaultState';
import ShopContext from './ShopContext';

export default function ShopContextProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || {}
  );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );
  const [userVisible, setUserVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('user', JSON.stringify(user));
  }, [cart, user]);

  const showUser = () => setUserVisible(!userVisible);
  const showCart = () => setCartVisible(!cartVisible);

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

  const logoutUser = () => {
    setUser({});
    localStorage.removeItem('user');
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
        logoutUser,
        userVisible,
        showUser,
        cartVisible,
        showCart,
      }}>
      {children}
    </ShopContext.Provider>
  );
}
