import React from 'react';
import { HeroContainer } from './styles';
import { Button } from '../Global';

const Hero = () => {
  return (
    <HeroContainer>
      <h1>Who needs Udemy, we can teachYou.</h1>
      <Button>Explore</Button>
    </HeroContainer>
  );
};

export default Hero;
