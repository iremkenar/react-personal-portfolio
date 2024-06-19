import React from "react";
import { Button, Box } from "@mui/material";


const buttonStyles = {
    fontSize: '1.25rem',
    width: '160px',
    fontWeight: '700',
    backgroundColor: '#332425',
    '&:hover': {
        backgroundColor: '#542B2C',
        opacity: '85%'
    },
};


const NavigationButtons = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '2rem' }} >
            <Button variant="contained" size="large" sx={buttonStyles} onClick={() => scrollToSection('portfolio-section')}>
                PORTFOLIO
            </Button>
            <Button variant="contained" size="large" sx={buttonStyles} onClick={() => scrollToSection('about-section')}>
                ABOUT
            </Button>
            <Button variant="contained" size="large" sx={buttonStyles} onClick={() => scrollToSection('contact-section')}>
                CONTACT
            </Button>
        </Box>
    )
}

export default NavigationButtons;