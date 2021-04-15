import React, { useState, useEffect, createContext } from 'react';

const defaultState = {
  products: [
    {
      lessons: [
        {
          name: 'React - basics',
          description:
            'This course is going to take you through basics of React.',
          author: 'James White',
          publishDate: '12/03/2019',
          duration: '00:03:56',
          image: 'https://cdn.auth0.com/blog/react-js/react.png',
        },
        {
          name: 'Vue - learn vue in an hour',
          description:
            'This course teaches you how to build a vue application in an hour.',
          author: 'Michael Brown',
          publishDate: '17/10/2019',
          duration: '00:00:59',
          image: 'https://vuejs.org/images/logo.png',
        },
        {
          name: 'CSS Animations',
          description: 'Learn how to animate anything in CSS',
          author: 'Alan Smith',
          publishDate: '04/12/2018',
          duration: '00:02:11',
          image:
            'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png',
        },
        {
          name: 'JS - Zero to hero',
          description: 'Everything you need to know in JS',
          author: 'Sarah Parker',
          publishDate: '12/03/2019',
          duration: '01:01:35',
          image:
            'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png',
        },
      ],
    },
  ],
};

const ShopContext = createContext(defaultState);
export default ShopContext;

export function ShopContextProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [cart, setCart] = useState([]);

  const loginUser = (name, email, password) => {
    const userObj = {
      name,
      email,
      password,
    };
    //create the new user
    setUser(localStorage.setItem('user', JSON.stringify(userObj)));
  };

  const addToCart = (productObj) => {
    //check if the product is already in the cart
    //add the product object to the cart array using the spread operator
    //save the cart array to local storage

    const found = cart.find((product) => product.name === productObj.name);
    if (found) {
      console.log('product exists');
    } else {
      const newObj = [...cart, productObj];
      setCart(newObj);
    }
  };

  const removeFromCart = (item) => {
    //find the object that matches the name of the item removed
    //filter the cart items to return everything but that object
    //set the cart object
    //save to LS
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        products: defaultState.products,
        loginUser,
        user,
      }}>
      {children}
    </ShopContext.Provider>
  );
}
