import React from 'react';
import { Container } from "@mui/material";
import { ParallaxContainer, ParallaxBackground, Content } from './styles';
import NavigationButtons from '../NavigationButtons/NavigationButtons';
import Header from '../Header/Header';
import PortfolioSection from '../PortfolioSection/PortfolioSection';


const Background = () => {

  return (
    <ParallaxContainer>
      <ParallaxBackground
        style={{ backgroundImage: `url('/img/aletsch-arena2.png')` }}
      />
      <Container disableGutters>
        <Content sx={{ width: '60%', margin: '0 auto' }}>
          <Header />
          <NavigationButtons />
        </Content>
        <PortfolioSection />
      </Container>
    </ParallaxContainer>
  );
};

export default Background;
