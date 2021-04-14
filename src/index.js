import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/home';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './components/globalStyles';
import styled from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <HomePage />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
