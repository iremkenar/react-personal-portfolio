import React, { useEffect, useState } from 'react';
import { Typography, Box } from "@mui/material";
import { Content } from './styles';
import NavigationButtons from '../NavigationButtons/NavigationButtons';
import ScrollArrow from '../ScrollArrow/ScrollArrow';

const HeaderSection = () => {

    const words = [
        'clean & elegant code',
        'simple design',
        'design thinking',
        'thinking',
        'learning',
        'unlearning',
        'relearning',
    ];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 4000);

        return () => {
            clearInterval(intervalId);
        };
    }, [words.length]);

    return (
        <Content sx={{ width: '50%', margin: '0 auto', height: '100vh', position: 'relative' }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', backgroundColor: '#542B2C', opacity: '0.85', borderRadius: '1rem',
            }}>
                <Typography mx={2} my={2} py={6} px={4} noWrap variant='h4' align='left' sx={{ lineHeight: '3rem' }} >
                    <b>Hi there</b>, I`m Irem,
                    <br />
                    a curious front‐end developer
                    <br />
                    who loves <b>{words[currentWordIndex]}</b>
                </Typography>
            </Box>
            <NavigationButtons />
            <ScrollArrow targetId="portfolio-section" />
        </Content>

    )
}

export default HeaderSection;