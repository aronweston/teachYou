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
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('user', JSON.stringify(user));
  }, [cart, user]);

  const searchProducts = (products, query) => {
    setQuery(query);
    setResults(
      products.filter((lesson) => {
        const search = query.replace(/[,-]/g, '').toLowerCase();
        const keywords = lesson.name.replace(/[,-]/g, '').toLowerCase();
        return keywords.includes(search);
      })
    );
  };

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
        products: defaultState.products[0].lessons,
        addToCart,
        removeFromCart,
        loginUser,
        logoutUser,
        userVisible,
        showUser,
        cartVisible,
        showCart,
        searchProducts,
        results,
        query,
      }}>
      {children}
    </ShopContext.Provider>
  );
}
