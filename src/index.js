import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';
import GlobalStyle from './components/globalStyles';
import { ShopContextProvider } from './context/ShopContext';

ReactDOM.render(
  <React.StrictMode>
    <ShopContextProvider>
      <GlobalStyle />
      <Header />
      <Home />
    </ShopContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
