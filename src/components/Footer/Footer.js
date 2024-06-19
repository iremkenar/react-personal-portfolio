import React from 'react';
import { Box, Typography } from "@mui/material";


const Footer = () => {
    return (
        <Box
            sx={{
                position: 'static',
                opacity: '0.85',
                bottom: 0,
                width: '100%',
                backgroundColor: 'white',
                color: 'black',
                textAlign: 'center',
            }}
        >
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} | İrem Kenar
            </Typography>
        </Box>

    )
}

export default Footer;