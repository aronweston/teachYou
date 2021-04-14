import React, { useState, createContext } from 'react';

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
  const [user, setUser] = useState(
    JSON.parse(
      typeof window !== 'undefined' ? localStorage.getItem('user') : null
    )
  );

  const loginUser = (email, password) => {
    const obj = {
      email,
      password,
    };

    localStorage.setItem('user', JSON.stringify(obj));
  };

  return (
    <ShopContext.Provider
      value={{
        products: defaultState.products,
        loginUser,
        user,
      }}>
      {children}
    </ShopContext.Provider>
  );
}
