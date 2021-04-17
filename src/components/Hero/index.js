import React from 'react';
import { HeroContainer } from './styles';
import Search from '../Search';

const Hero = () => {
  return (
    <HeroContainer>
      <h1>Who needs Udemy, we can teachYou.</h1>
      <Search />
    </HeroContainer>
  );
};

export default Hero;
