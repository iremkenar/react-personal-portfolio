import React from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ScrollArrow = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <Box sx={{
            position: 'absolute',
            bottom: '10%',
            left: '47%'
        }}>
            <IconButton sx={{ border: '3px solid white', backgroundColor: '#332425' }} onClick={() => scrollToSection('portfolio-section')}>
                <ArrowDownwardIcon sx={{ fontSize: '2rem', color: 'white' }} />
            </IconButton>

        </Box >
    );
};

export default ScrollArrow;