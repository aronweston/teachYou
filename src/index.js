import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';
import GlobalStyle from './components/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
