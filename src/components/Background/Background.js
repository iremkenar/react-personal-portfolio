import React from 'react';
import { Container } from "@mui/material";
import { ParallaxBackground } from './styles';
import HeaderSection from '../HeaderSection/HeaderSection';
import PortfolioSection from '../PortfolioSection/PortfolioSection';
import AboutSection from '../AboutSection/AboutSection';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';

const Background = () => {

  return (
    <ParallaxBackground>
      <Container maxWidth={false} disableGutters>
        <HeaderSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </Container>
      <Footer />
    </ParallaxBackground>
  );
};

export default Background;
