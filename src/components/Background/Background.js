import React from 'react';
import { Container } from "@mui/material";
import { ParallaxBackground, Content } from './styles';
import NavigationButtons from '../NavigationButtons/NavigationButtons';
import Header from '../Header/Header';
import PortfolioSection from '../PortfolioSection/PortfolioSection';
import AboutSection from '../AboutSection/AboutSection';

const Background = () => {

  return (
    <ParallaxBackground>
      <Container maxWidth={false} disableGutters>
        <Content sx={{ width: '60%', margin: '0 auto' }}>
          <Header />
          <NavigationButtons />
        </Content>
        <PortfolioSection />
        <AboutSection />
      </Container>
    </ParallaxBackground>
  );
};

export default Background;
