import React from 'react';
import { Box, Typography } from "@mui/material";

const AboutSection = () => {
    return (
        <Box id='about-section' sx={{ backgroundColor: '#4E6C54', color: 'white', paddingTop: 6, paddingBottom: 10 }}>
            <Typography variant='h3' sx={{ fontWeight: '600', textAlign: 'center', marginBottom: 4 }}>About</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%', margin: '0 auto', gap: 2 }}>
                <Box component="img" src={'img/irem-portrait.png'} alt='portrait photo' sx={{ borderRadius: '1rem', width: '40%', }} />
                <Typography ml={4} mr={4} variant='h6' sx={{ width: '40%' }} >A multipotentialite front-end developer, <br /> with a background in marketing and communications. Become an adessi about three years ago, after graduating from Kodluyoruz JavaScript Bootcamp. Have been gaining experience with ReactJS, and improving her knowledge of front-end technologies, such as Next.js, TypeScript and CSS libraries through CMS based projects.</Typography>
            </Box>
        </Box>
    )
}

export default AboutSection;