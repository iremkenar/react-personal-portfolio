import React from 'react';
import { Box, Typography, IconButton, Link, Tooltip } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


const ContactSection = () => {
    return (
        <Box id='contact-section' sx={{ marginTop: 6, height: '90vh' }}>
            <Box sx={{ margin: '0 auto', backgroundColor: '#542B2C', color: 'white', width: '30%', borderRadius: '1rem', marginBottom: 4, paddingBottom: '0.5rem' }}>
                <Typography sx={{ fontWeight: '600', textAlign: 'center', }} variant='h4'>Contact</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40%', margin: '0 auto', gap: 2 }}>
                <Link href="https://www.linkedin.com/in/iremkenar/" target="_blank" rel="noopener" underline="none">
                    <IconButton sx={{
                        width: '4rem',
                        height: '4rem',
                        backgroundColor: '#542B2C',
                        color: '#ffffff',
                        '&:hover': {
                            backgroundColor: '#3e2021',
                        },
                    }}>
                        <LinkedInIcon sx={{
                            fontSize: '2.5rem'
                        }} />
                    </IconButton>
                </Link>
                <Tooltip arrow='top' title={
                    <>
                        <Typography variant='h5'>
                            Pre-Work
                        </Typography>
                        <Typography>
                            This account showcases my early work, personal projects, and the initial learning phase of my programming journey
                        </Typography>
                    </>
                }>
                    <Link href="https://github.com/iremkenar" target="_blank" rel="noopener" underline="none">
                        <IconButton sx={{
                            width: '4rem',
                            height: '4rem',
                            backgroundColor: '#542B2C',
                            color: '#ffffff',
                            '&:hover': {
                                backgroundColor: '#3e2021',
                            },
                        }}>
                            <GitHubIcon sx={{
                                fontSize: '2.5rem'
                            }} />
                        </IconButton>
                    </Link>
                </Tooltip>
                <Tooltip arrow='top' title={
                    <>
                        <Typography variant='h5'>
                            Post-Work
                        </Typography>
                        <Typography>
                            This account contains guided projects and more advanced work that I completed independently to further my skills after I started working                        </Typography>
                    </>
                }>
                    <Link href="https://github.com/irem-kenar" target="_blank" rel="noopener" underline="none">
                        <IconButton sx={{
                            width: '4rem',
                            height: '4rem',
                            backgroundColor: '#542B2C',
                            color: '#C2D4EF',
                            '&:hover': {
                                backgroundColor: '#3e2021',
                            },
                        }}>
                            <GitHubIcon sx={{
                                fontSize: '2.5rem'
                            }} />
                        </IconButton>
                    </Link>
                </Tooltip>
            </Box>
            <Box sx={{ padding: 4 }}>
                <Box sx={{ margin: '0 auto', backgroundColor: '#542B2C', color: 'white', width: '25%', borderRadius: '1rem', marginY: 4, paddingY: '0.5rem' }}>
                    <Link href="irem.kenar@outlook.com" sx={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
                        textDecoration: 'none'
                    }}>
                        <EmailIcon sx={{ marginRight: 1 }} />
                        <Typography sx={{ fontWeight: '600', textAlign: 'center' }} variant="body1">irem.kenar@outlook.com</Typography>
                    </Link>
                </Box>
            </Box>

        </Box>

    )
}

export default ContactSection;