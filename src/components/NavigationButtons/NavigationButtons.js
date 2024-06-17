import React from "react";
import { Button, Box } from "@mui/material";

const buttonStyles = {
    fontSize: '1.25rem',
    fontWeight: '700',
    backgroundColor: '#332425',
    '&:hover': {
        backgroundColor: '#542B2C',
        opacity: '85%'
    },
};


const NavigationButtons = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '2rem' }} >
            <Button variant="contained" size="large" sx={buttonStyles}>
                PORTFOLIO
            </Button>
            <Button variant="contained" size="large" sx={buttonStyles}>
                ABOUT
            </Button>
            <Button variant="contained" size="large" sx={buttonStyles}>
                CONTACT
            </Button>
        </Box>
    )
}

export default NavigationButtons;