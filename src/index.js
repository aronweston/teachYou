import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import GlobalStyle from './components/globalStyles';
import ShopContextProvider from './context/Provider';

ReactDOM.render(
  <React.StrictMode>
    <ShopContextProvider>
      <GlobalStyle />
      <Header />
      <App />
    </ShopContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
