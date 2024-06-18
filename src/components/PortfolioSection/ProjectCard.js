import React from 'react';
import { IconButton, Box, } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CodeIcon from '@mui/icons-material/Code';

const ProjectCard = ({ projectImage, projectCodeLink, projectLiveLink, projectAltText }) => {


    return (
        <Box sx={{
            maxWidth: '450px',
            position: 'relative',
            margin: '1rem'
        }}>
            <Box component="img" src={projectImage} alt={projectAltText} sx={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '1rem', }} />
            <Box
                sx={{
                    backgroundColor: '#FCFDFD',
                    borderRadius: '1rem',
                    opacity: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    transition: 'opacity 0.5s ease',
                    border: '2px solid #542B2C',
                    '&:hover': {
                        opacity: 1,
                    },
                }}
            >
                <IconButton
                    aria-label="View Live Project"
                    onClick={(e) => {
                        e.stopPropagation();
                        window.open(projectLiveLink, '_blank')
                    }}
                >
                    <VisibilityIcon sx={{
                        color: '#542B2C',
                        fontSize: '5rem'
                    }} />
                </IconButton>
                {projectCodeLink && <IconButton
                    aria-label="View Code"
                    onClick={(e) => {
                        e.stopPropagation();
                        window.open(projectCodeLink, '_blank')
                    }}
                >
                    <CodeIcon sx={{
                        color: '#542B2C',
                        fontSize: '5rem'
                    }} />
                </IconButton>}
            </Box>
        </Box >
    );
}

export default ProjectCard;